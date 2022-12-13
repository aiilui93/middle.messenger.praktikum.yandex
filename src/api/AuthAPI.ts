import BaseAPI from './BaseAPI';
import { SigninData, SignupData } from '../utils/types/dataTypes';

export default class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    public signin(data: SigninData) {
        return this.http.post('/signin', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    public signup(data: SignupData) {
        return this.http.post('/signup', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    public read() {
        return this.http.get('/user')
            .then((response) => response)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    public logout() {
        return this.http.post('/logout')
            .then(() => true)
            .catch((e) => {
                throw new Error(e);
            });
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}
