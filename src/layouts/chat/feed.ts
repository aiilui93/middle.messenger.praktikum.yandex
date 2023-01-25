import ChatItem from '../../components/chat';
import chatController from '../../controllers/ChatController';
import Block from '../../utils/Block/Block';
import isEqual from '../../utils/helpers/isEqual';
import validateRegExp from '../../utils/helpers/validate';
import withStore from '../../utils/hocs/withStore';
import store from '../../utils/Store/Store';
import { ChatInfo } from '../../utils/types/dataTypes';
import temp from './feedTemplate';

type ChatFeedProps = {
    chats?: ChatInfo[];
    link?: unknown;
    search?: string;
    title?: string;
    popup?: unknown;
    selectedChat?: number;
    user?: Record<string, any>;
    events?: {
      click: () => void;
    };
}

class ChatFeedBase extends Block<ChatFeedProps> {
    constructor(props: ChatFeedProps) {
        super('aside', 'chat__feed', props);
    }

    addUserToChat() {
        const input: HTMLInputElement = document.querySelector('input[name="userIdAdd"]') as HTMLInputElement;
        if (input) {
            const id: number | undefined = Number(input.value);
            const chatId: number | undefined = this.props.selectedChat;
            if (chatId && id) {
                chatController.addUserToChat(chatId, id);
                return true;
            }
        }
        return false;
    }

    async removeUserFromChat() {
        const input: HTMLInputElement = document.querySelector('input[name="userIdRemove"]') as HTMLInputElement;
        if (input) {
            const id: number | undefined = Number(input.value);
            const chatId: number | undefined = this.props.selectedChat;
            if (chatId && id) {
                chatController.removeUserFromChat(chatId, id);
                return true;
            }
        }
        return false;
    }

    createChat() {
        // открываем popup, где есть input
        // туда вводим название чата
        // ...

        let title: string = '';

        const chatName: HTMLInputElement = document.querySelector('input[name="chatName"]') as HTMLInputElement;
        if (chatName) {
            title = chatName.value;
        } else {
            title = 'Новый чат';
        }

        if (validateRegExp(chatName, 'chatname').test === true) {
            chatController.create(title);
            chatName.value = '';
            return true;
        }

        return false;
    }

    removeChat() {
        const chatId: number = store.getState().selectedChat;
        chatController.delete(chatId);
        return true;
    }

    componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): boolean {
        if (newProps.chats) {
            this.children.chats = newProps.chats as any;
        }

        return isEqual(oldProps, newProps);
    }

    render() {
        return this.compile(temp, { ...this.props });
    }
}

const withChats = withStore((state) => {
    if (!state.chats) {
        return {};
    }

    const chatId = state.selectedChat;
    const chatInstances: unknown = state.chats.map((props: ChatInfo) => new ChatItem({ chatId: props.id, selected: chatId === props.id, ...props }));

    if (!chatId) {
        return {
            messages: [],
            chats: chatInstances || [],
            user: state.user.data,
        };
    }

    return {
        messages: (state.messages || {})[chatId] || [],
        chats: chatInstances || [],
        selectedChat: chatId,
        user: state.user.data,
    };
});

const ChatFeed = withChats(ChatFeedBase);

export default ChatFeed;
