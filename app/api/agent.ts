import axios, { AxiosError, AxiosResponse } from 'axios';
import { User, UserFormValue } from '../models/user';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}





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