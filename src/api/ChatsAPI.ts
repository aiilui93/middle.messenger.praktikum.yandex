import BaseAPI from './BaseAPI';

export default class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    create(chatName: string) {
        const data = { title: chatName };
        return this.http.post('/', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    delete(id: number): Promise<unknown> {
        const data = { chatId: id };
        return this.http.delete('/', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    read(): Promise<unknown> {
        return this.http.get('/')
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    getUsers(id: number): Promise<unknown> {
        return this.http.get(`/${id}/users`)
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    addUsers(id: number, usersArray: number[]): Promise<unknown> {
        const data = { users: usersArray, chatId: id };
        return this.http.put('/users', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    async getToken(id: number): Promise<string> {
        const response: Record<string, string> = await this.http.post(`/token/${id}`) as Record<string, string>;
        return response.token;
    }

    update = undefined;
}
