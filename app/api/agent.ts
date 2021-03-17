import axios, { AxiosError, AxiosResponse } from 'axios';
import { PaginatedResult } from '../models/paginations';
import { User, UserFormValue } from '../models/user';
import { store } from '../stores/store';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://192.168.0.112:5000/api'; // to get url from .env 

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
   // console.log('config', config.headers.Authorization)
    return config;
})

axios.interceptors.response.use(async response => {
    if(process.env.NODE_ENV === 'development') await sleep(1000);
    const pagination = response.headers['pagination'];
    if (pagination) {
        response.data = new PaginatedResult(response.data, JSON.parse(pagination));
        return response as AxiosResponse<PaginatedResult<any>>;
    }
        console.log("response",response)
    return response;
}, (error: AxiosError) => {
    console.log("error",error)
    const { data, status, config, headers} = error.response!;
    switch (status) {
        case 400:
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
               // history.push('/not-found');
               console.log('not-found')
            }
            if (data.errors) {
                const modalStateErrors = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors.push(data.errors[key])
                    }
                }
                throw modalStateErrors.every;
            } else {
                console.log(data)
               // toast.error(data);
            }
            break;
        case 401:
            if(status === 401 && headers['ww-Authenticate'].startsWith('Bearer error="invalid_token')){
                store.userStore.logout();
                console.log('Session expired - please login again')
             //   toast.error('Session expired - please login again');
            }
         
            break;
        case 404:
            console.log('not found')
           // history.push('/not-found');
            break;
        case 500:
            store.commonStore.setServerError(data);
          //  history.push('/server-error');
          console.log('server-error')
            break;
    }
    return Promise.reject(error);
})


const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValue) => requests.post<User>('/account/login', user),
    register: (user: UserFormValue) => requests.post<User>('/account/register', user),
    fbLogin: (accessToken: string) => requests.post<User>(`/account/fbLogin?accessToken=${accessToken}`, {}),
    refreshToken: () => requests.post<User>('/account/refreshToken', {})

}


const agent = {
    Account,
}


export default agent;