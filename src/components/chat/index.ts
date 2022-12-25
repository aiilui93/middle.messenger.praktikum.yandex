import chatController from '../../controllers/ChatController';
import Block from '../../utils/Block/Block';
import getTime from '../../utils/helpers/getTime';
import withStore from '../../utils/hocs/withStore';
import store from '../../utils/Store/Store';
import template from './chat';

class ChatItemBase extends Block<Record<string, any>> {
    constructor(props: Record<string, any>) {
        super('div', '', props);
    }

    _init() {
        this.setProps({
            events: {
                click: () => {
                    this.setProps({
                        selected: true,
                    });

                    chatController.selectChat(this.props.chatId);
                    store.set('selectedChatName', this.props.title);
                },
            },
        });
    }

    render() {
        const lastMsg: Record<string, any> = this.props.last_message;
        if (lastMsg) {
            const login = lastMsg.user.login;
            if (this.props.userLogin === login) {
                this.props.last_message.displayName = 'Вы';
            }
        }

        if (this.props.last_message) {
            if (this.props.last_message.time) {
                this.props.last_message.timeText = getTime(this.props.last_message.time as string);
            }
        }
        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => {
    if (!state.chats) {
        return {};
    }

    let login: string = '';

    if (state.user.data) {
        login = state.user.data.login;
    }

    const chatId = state.selectedChat;
    return {
        selectedChat: chatId,
        userLogin: login,
    };
});

const ChatItem = withUser(ChatItemBase);

export default ChatItem;
