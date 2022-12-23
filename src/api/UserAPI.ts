import BaseAPI from './BaseAPI';
import { Password, User } from '../utils/types/dataTypes';

export default class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    public changeUserData(data: User) {
        return this.http.put('/profile', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    public changeUserAvatar(data: FormData) {
        return this.http.put('/profile/avatar', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    public changeUserPassword(data: Password) {
        return this.http.put('/password', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e);
            });
    }

    public read(data: User) {
        return this.http.get(`/${data.id}`)
            .then((response) => response)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}
