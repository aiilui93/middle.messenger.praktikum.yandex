import AuthAPI from '../api/AuthAPI';
import Router from '../utils/Router/Router';
import store from '../utils/Store/Store';
import { Routes, SigninData, SignupData } from '../utils/types/dataTypes';

class AuthController {
    private api = new AuthAPI();

    async signup(data: SignupData) {
        try {
            await this.api.signup(data);
            await this.fetchUser();
            store.set('user.error', undefined);
            Router.go(Routes.Settings);
        } catch (error: any) {
            store.set('user.error', error.message);
            console.error(error.message);
        }
    }

    async signin(data: SigninData) {
        try {
            await this.api.signin(data);
            await this.fetchUser();
            store.set('user.error', undefined);
            Router.go(Routes.Chat);
        } catch (error: any) {
            store.set('user.error', error.message);
            console.error(error.message);
        }
    }

    async logout() {
        try {
            await this.api.logout();
            store.set('user.error', undefined);
            Router.go(Routes.Index);
        } catch (error: any) {
            store.set('user.error', error);
            console.error(error.message);
        }
    }

    async fetchUser() {
        store.set('user.isLoading', true);

        try {
            const user = await this.api.read();
            store.set('user', user);
        } catch (error: any) {
            store.set('user.error', error.message);
            console.error('fetchUser error', error.message);
        } finally {
            store.set('user.isLoading', false);
        }
    }
}

export default new AuthController();
