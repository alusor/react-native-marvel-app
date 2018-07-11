import md5 from 'blueimp-md5';
import Axios from '../node_modules/axios';


const ts = 1;
const apikey = 'ab49a0bfc23db31e975f70967dfbc1f3';
const privkey = 'a9d29fbd9fa51e71961d13a4968d36acb6cbbc44';
const hash = 'd29abc968d8e7561e9113c2fadc124c4'
console.log(hash);
const BASE_URL = `http://gateway.marvel.com/v1/public/`;
const autenticationString = `?ts=${ts}&apikey=${apikey}&hash=${hash}`;

export async function getComics() {
     return Axios({
            url: `${BASE_URL}comics${autenticationString}`,
            method: 'GET'
        });


}