import { StoreContext } from './store';
import { ServerErrors } from './../models/serverErrors';
import { makeAutoObservable, reaction } from 'mobx';
import { useContext } from 'react';
import * as SecureStore from 'expo-secure-store';

export default class CommonStore {
    error: ServerErrors | null = null;
    token: string | null=null;
    appLoaded = false;
    darkMode = false;


    constructor(){
        makeAutoObservable(this);
    
        reaction(()=> this.token,
            async token => 
             {
                 if(token){
                    await SecureStore.setItemAsync('jwt', token);
                 }else {
                    await SecureStore.deleteItemAsync('jwt')
                 }
             }
        )
     
    }

    setServerError=(error: ServerErrors)=> {
        this.error= error;
    }
    setToken = (token :string | null)=>{
        this.token = token;
    }
 
   setApploaded = ()=> {
        this.appLoaded= true;
    }
 

}