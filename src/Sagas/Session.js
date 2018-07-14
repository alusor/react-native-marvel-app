import { call, put, takeEvery } from 'redux-saga/effects';
import session from '../Actions/Session';
import { NavigationActions, StackActions } from 'react-navigation';
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

async function facebookLogin() {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  
      if (result.isCancelled) {
        return null;
        //throw new Error('User cancelled request');
      }
  
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
      
      // get the access token
      const data = await AccessToken.getCurrentAccessToken();
      
      if (!data) {
        return null;
      }
  
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
  
      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  
      console.info(JSON.stringify(currentUser.user.toJSON()))
      
      return currentUser;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
function graphRequest() {
  return new Promise((async (resolve, reject) => {
    const data = await AccessToken.getCurrentAccessToken();
      
      const graphRequest = new GraphRequest('/me', {
        accessToken: data.accessToken,
        parameters: {
          fields: {
            string: 'picture.type(large)',
          },
        },
      }, (error, result) => {
        if (error) {
          console.error(error)
          reject(error);
        } else {
          console.log(result.picture.data.url);
          resolve( result.picture.data.url);
        }
      })
    
      new GraphRequestManager().addRequest(graphRequest).start()
  }))
}
async function getImage(){
  const response = await graphRequest();
  return response;
}
function * userLogin() {
    console.log('login saga');
    const user = yield call(facebookLogin);
    console.log(user.user._user.photoURL);
    if(user) {
        const image = yield call(getImage);
        //console.log(image);
        user.getImage = image;
        yield put(session.creators.userLoginComplete(user));
    }
        yield put(session.creators.userLoginFailed())
}
function * completeLogin() {
    yield put( NavigationActions.navigate({routeName: 'Tab'}));
}

async function logout() {
  try{
    await firebase.auth().signOut();
  } catch(e){
    return true;
  } 
  return true;
}

function * userLogout() {
  yield call(logout);
  yield put(StackActions.popToTop());
}

export function * loginSaga() {
      yield takeEvery(session.types.USER_LOGIN, userLogin);
      yield takeEvery(session.types.USER_LOGIN_COMPLETE, completeLogin);
      yield takeEvery(session.types.USER_LOGOUT, userLogout);
}