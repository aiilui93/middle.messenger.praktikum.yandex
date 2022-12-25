import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/Store/Store';
import { ChatInfo } from '../utils/types/dataTypes';
import messagesController from './MessagesController';

class ChatController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async create(title: string) {
        try {
            await this.api.create(title);
            this.fetchChats();
            store.set('chats.error', undefined);
        } catch (error: any) {
            store.set('chats.error', error.message);
            console.error(error.message);
        }
    }

    async fetchChats() {
        const chats: ChatInfo[] = await this.api.read() as ChatInfo[];

        chats.map(async (chat) => {
            const token = await this.getToken(chat.id);
            await messagesController.connect(chat.id, token);
        });

        store.set('chats', chats);
    }

    addUserToChat(id: number, userId: number) {
        this.api.addUsers(id, [userId]);
    }

    removeUserFromChat(id: number, userId: number) {
        this.api.removeUsers(id, [userId]);
    }

    async delete(id: number) {
        await this.api.delete(id);
        this.fetchChats();
    }

    getToken(id: number) {
        return this.api.getToken(id);
    }

    async selectChat(id: number) {
        const token = await this.getToken(id);
        messagesController.connect(id, token);
        store.set('selectedChat', id);
    }
}

const chatController = new ChatController();

export default chatController;
