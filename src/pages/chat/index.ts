import createInstances from '../../utils/helpers/createInstances';
import { messages, chatData } from './data';
import ChatPage from '../../layouts/chat';
import ChatFeed from '../../layouts/chat/feed';
import ChatContent from '../../layouts/chat/chat';
import Dropdown from '../../components/dropdown';
import Message from '../../components/message';
import Textarea from '../../components/textarea';
import Button from '../../components/button';
import '../../styles/chat.scss';
import Link from '../../components/link';
import { Routes } from '../../utils/types/dataTypes';
import Router from '../../utils/Router/Router';

const messageItems = createInstances(messages, Message);

const feed = new ChatFeed({
    chats: chatData,
    title: 'Чат',
    link: new Link({
        class: 'link',
        symlink: Routes.Settings,
        anchor: 'Профиль >',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                Router.go(Routes.Settings);
            },
        },
    }),
});

const chat = new ChatContent({
    messages: messageItems,
    textarea: new Textarea({
        class: 'new-message__field',
        name: 'message',
        id: 'message',
        validate_rule: 'message',
    }),
    button: new Button({
        name: '',
        icon: 'send',
        class: 'button-round button-icon new-message__send',
        events: {
            click: (e) => {
                e.preventDefault();
            },
        },
    }),
    attachments: new Dropdown({
        class: 'attach_file',
        items: [
            {
                action: 'add_photo_alternate',
                title: 'Фото или Видео',
            },
            {
                action: 'upload_file',
                title: 'Файл',
            },
            {
                action: 'location_on',
                title: 'Локация',
            },
        ],
    }),
    user_actions: new Dropdown({
        class: 'more_vert',
        items: [
            {
                action: 'person_add',
                title: 'Добавить пользователя',
            },
            {
                action: 'person_remove',
                title: 'Удалить пользователя',
            },
        ],
    }),
});

const chatPage = new ChatPage({
    children: [chat, feed],
});

export default chatPage;
