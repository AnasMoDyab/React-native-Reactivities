import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { User, UserFormValue } from "../models/user";
import { store } from "./store";
import * as SecureStore from 'expo-secure-store';
import jwt_decode from "jwt-decode";

export default class UserStore {
    user: User | null = null;
    fbAccessToken: string | null = null;
    fbLoading = false;
    refreshTokenTimOut: any;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValue) => {
        console.log(creds);
        try {
            const user = await agent.Account.login(creds);
            console.log(user);
            store.commonStore.setToken(user.token);
           // this.startRefreshMethodTimer(user);
            runInAction(() => this.user = user);
           // history.push('/activities');
            store.modalStore.closeModal();
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    logout = async () => {
        store.commonStore.setToken(null);
        await SecureStore.deleteItemAsync('jwt')
        this.user = null;
       // history.push('/');
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
          //  this.startRefreshMethodTimer(user);
        } catch (error) {
            console.log(error);
        }
    }

    register = async (creds: UserFormValue) => {
        try {
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
           // this.startRefreshMethodTimer(user);
            runInAction(() => this.user = user);
           // history.push('/activities');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    setImage = (image: string) => {
        if (this.user) this.user.image = image;
    } 

    setDisplayName = (name: string) => {
        if (this.user) this.user.displayName = name;
    }

/*     getFacebookLoginStatus = async () => {
        window.FB.getLoginStatus(response => {
         
            if (response.status === 'connected') {
                this.fbAccessToken = response.authResponse.accessToken;
            }
        })
    } */

/*     facebookLogin = () => {
        this.fbLoading = true;
        const apiLogin = (accessToken: string) => {
            agent.Account.fbLogin(accessToken).then(user => {
                store.commonStore.setToken(user.token);
                this.startRefreshMethodTimer(user);
                runInAction(() => {
                    this.user = user;
                    this.fbLoading = false;
                })
                history.push('/activities');
            }).catch(error => {
                console.log("login error",error);
                runInAction(() => this.fbLoading = false);
            })
        }
        if (this.fbAccessToken) {
            apiLogin(this.fbAccessToken);
        } else {
            window.FB.login(response => {
                apiLogin(response.authResponse.accessToken);
            }, {scope: 'public_profile,email'})
        }
    } */

    refreshToken = async () => {
        this.stopRefreashTimer();
        try {
            const user = await agent.Account.refreshToken();
            runInAction(()=>  {
                this.user = user;
            })
            store.commonStore.setToken(user.token);
            this.startRefreshMethodTimer(user);
        } catch (error) {
            console.log(error);
        }
    }

    private startRefreshMethodTimer (user:User) {
        console.log(user.token);
        const jwtToken = JSON.parse(jwt_decode(user.token.split('.')[1]));
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime()- Date.now() -(60 *1000);

        this.refreshTokenTimOut = setTimeout(this.refreshToken, timeout);
    }

    private stopRefreashTimer () {
        clearTimeout(this.refreshTokenTimOut);
    }

}