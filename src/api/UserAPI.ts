import BaseAPI from './BaseAPI';
import { Password, User } from '../utils/types/dataTypes';

export default class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    public changeUserData(data: User) {
        return this.http.put('/profile', { data });
    }

    public changeUserAvatar(data: FormData) {
        return this.http.put('/profile/avatar', { data });
    }

    public changeUserPassword(data: Password) {
        return this.http.put('/password', { data });
    }

    public read(data: User) {
        return this.http.get(`/${data.id}`);
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}
