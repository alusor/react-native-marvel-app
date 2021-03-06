import Axios from '../node_modules/axios';
import firebase from 'react-native-firebase';


const ref = firebase.firestore();

const ts = 1;
const apikey = 'ab49a0bfc23db31e975f70967dfbc1f3';
const hash = 'd29abc968d8e7561e9113c2fadc124c4'
const BASE_URL = `http://gateway.marvel.com/v1/public/`;
const autenticationString = `?ts=${ts}&apikey=${apikey}&hash=${hash}`;

async function getComics() {
     return Axios({
            url: `${BASE_URL}comics${autenticationString}`,
            method: 'GET'
        });
}

async function setFavorites(data) {
    console.log(data);
    const user = firebase.auth().currentUser;
    console.log(user.uid);
    const tmp = await ref.collection('Favoritos').doc(user.uid).set(data);
    console.log(tmp)

}
async function getFavorites() {
    const user = firebase.auth().currentUser;
    console.log(user.uid);
    const tmp = await ref.collection('Favoritos').doc(user.uid).get();
    try{
        return Object.values(tmp.data());
    } catch(e){
        console.log(e);
        return [];
    }
}

export {getComics, setFavorites, getFavorites}