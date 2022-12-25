import BaseAPI from './BaseAPI';

export class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    create(chatName: string) {
        const data = { title: chatName };
        return this.http.post('/', { data });
    }

    delete(id: number): Promise<unknown> {
        const data = { chatId: id };
        return this.http.delete('/', { data });
    }

    read():Promise<unknown> {
        return this.http.get('/');
    }

    getUsers(id: number): Promise<unknown> {
        return this.http.get(`/${id}/users`);
    }

    addUsers(id: number, users: number[]): Promise<unknown> {
        const data = { users, chatId: id };
        console.log(data);
        return this.http.put('/users', { data });
    }

    removeUsers(id: number, users: number[]): Promise<unknown> {
        const data = { users, chatId: id };
        return this.http.delete('/users', { data });
    }

    async getToken(id: number): Promise<string> {
        const response: Record<string, string> = await this.http.post(`/token/${id}`) as Record<string, string>;
        return response.token;
    }

    update = undefined;
}

export default new ChatsAPI();
