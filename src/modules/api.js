import {AsyncStorage} from 'react-native';
import config from './config';
class API {

    constructor(){

    }
    getToken(){
        return this.token
    }
    initToken(username,password) {
        return fetch(config.url+'/auth/authenticate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((response) => response.text())
        
    }
    getUsers(){
        return fetch(config.url+'/api/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization':config.Authorization
            },
        })
        .then((response) => response.json())
        .finally((response)=>{
            console.log(response)
        })
    }
}
export default API