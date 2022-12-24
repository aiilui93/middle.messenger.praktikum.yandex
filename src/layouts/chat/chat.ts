import Block from '../../utils/Block/Block';
import Textarea from '../../components/textarea';
import Button from '../../components/button';
import Message from '../../components/message';
import temp from './chatTemplate';
import { Message as IMessage } from '../../utils/types/dataTypes';
import withStore from '../../utils/hocs/withStore';
import messagesController from '../../controllers/MessagesController';
import validateRegExp from '../../utils/helpers/validate';

type ChatContentProps = {
    attachments?: Record<string, any>;
    user_actions?: Record<string, any>;
    messages?: IMessage[];
    textarea?: Textarea;
    button?: Button;
    profile?: string;
    selectedChat?: number;
    profile_link?: string;
    title?: string;
    events?: {
      click: () => void;
    };
}

enum TextareaField {
    Field = 'message',
}

class ChatContentBase extends Block<ChatContentProps> {
    constructor(props: ChatContentProps) {
        super('article', 'chat__area notactive', props);
    }

    _init() {
        this.children.textarea = new Textarea({
            class: 'new-message__field',
            name: TextareaField.Field,
            id: TextareaField.Field,
            validate_rule: TextareaField.Field,
        });

        this.children.button = new Button({
            name: '',
            icon: 'send',
            class: 'button-round button-icon new-message__send',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const textarea = this.children.textarea;
                    if (textarea.element) {
                        const result: Record<string, any> = validateRegExp(textarea.element, TextareaField.Field);

                        if (textarea instanceof Textarea) {
                            if (result.test === false) {
                                textarea.showError(result.error, result.value);
                            } else {
                                textarea.hideError(result.value);
                                this.sendMessage(result.value);
                            }
                        }
                    }
                    return true;
                },
            },
        });
    }

    setValue = (valueText: string):void => {
        this.children.textarea.setProps({ value: valueText });
    };

    componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): boolean {
        if (newProps.selectedChat !== undefined) {
            this.element?.classList.remove('notactive');
        }
        if (newProps.messages) {
            this.children.messageItems = newProps.messages as any;
        }

        return true;
    }

    sendMessage(value: string) {
        const chatId: number | undefined = this.props.selectedChat;
        if (value && chatId) {
            const message: string = value;
            messagesController.sendMessage(chatId, message);
        }
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

    if (!chatId) {
        return {
            messages: [],
            chats: [...(state.chats || [])],
            selectedChat: undefined,
            userId: state.user.id,
        };
    }

    const currentChat = state.messages[chatId];
    const messageInstances:Message[] = currentChat.map((props: IMessage) => new Message({ isMine: state.user.data.id === props.user_id, ...props }));

    return {
        messages: messageInstances.reverse() || [],
        chats: [...(state.chats || [])],
        selectedChat: state.selectedChat,
        selectedChatName: state.selectedChatName,
        userId: state.user.id,
    };
});

const ChatContent = withChats(ChatContentBase);

export default ChatContent;
