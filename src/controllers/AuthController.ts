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
            Router.go(Routes.Chat);
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

        const user = await this.api.read();
        store.set('user.data', user);
    }

    async fetchChats() {
        const chats = await this.api.read();

        store.set('chats', chats);
    }
}

export default new AuthController();
