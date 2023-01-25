import UserAPI from '../api/UserAPI';
import Router from '../utils/Router/Router';
import store from '../utils/Store/Store';
import { Password, Routes, SignupData } from '../utils/types/dataTypes';
import AuthController from './AuthController';

class UserController {
    private api = new UserAPI();

    async changeUserData(data: SignupData) {
        try {
            await this.api.changeUserData(data);
            await AuthController.fetchUser();
            store.set('user.error', undefined);
            Router.go(Routes.Settings);
        } catch (error: any) {
            store.set('user.error', error.message);
            console.error(error.message);
        }
    }

    async changeUserAvatar(data: FormData) {
        try {
            await this.api.changeUserAvatar(data);
            await AuthController.fetchUser();
            store.set('user.error', undefined);
            Router.go(Routes.Settings);
        } catch (error: any) {
            store.set('user.error', error.message);
            console.error(error.message);
        }
    }

    async changeUserPassword(password: Password) {
        try {
            await this.api.changeUserPassword(password);
            await AuthController.fetchUser();
            store.set('user.error', undefined);
        } catch (error: any) {
            store.set('user.error', error.message);
            console.error(error.message);
        }
    }
}

export default new UserController();
