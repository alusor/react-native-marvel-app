import { call, put, takeEvery } from 'redux-saga/effects';
import session from '../Actions/Session';
import { NavigationActions } from 'react-navigation';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

async function facebookLogin() {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  
      if (result.isCancelled) {
        throw new Error('User cancelled request'); // Handle this however fits the flow of your app
      }
  
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
  
      // get the access token
      const data = await AccessToken.getCurrentAccessToken();
  
      if (!data) {
        throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
      }
  
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
  
      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  
      console.info(JSON.stringify(currentUser.user.toJSON()))
      return currentUser;
    } catch (e) {
      console.error(e);
    }
  }

function * userLogin() {
    console.log('login saga');
    const user = yield call(facebookLogin);
    yield put(session.creators.userLoginComplete(user));
}
function * completeLogin() {
    yield put(NavigationActions.navigate({ routeName: 'Tab' }));
}

  export function * loginSaga() {
      yield takeEvery(session.types.USER_LOGIN, userLogin);
      yield takeEvery(session.types.USER_LOGIN_COMPLETE, completeLogin);
  }