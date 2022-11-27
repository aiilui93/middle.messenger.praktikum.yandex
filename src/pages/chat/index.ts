import createInstances from '../../utils/helpers/createInstances';
import renderPage from '../../utils/render/renderPage'
import { messages, chatData} from './data';
import { ChatPage, ChatContent, ChatFeed } from '../../layouts/chat';
import Dropdown from '../../components/dropdown';
import Message from '../../components/message';

const messageItems = createInstances(messages, Message);

const feed = new ChatFeed({ 
    chats: chatData,
    profile: 'Профиль',
    profile_link: '/pages/settings/index.html',
    title: 'Чат'
});

const chat = new ChatContent({ 
    messages: messageItems,
    attachments: new Dropdown({
        class: 'attach_file',
        items: [
            {
                action: 'add_photo_alternate',
                title: 'Фото или Видео'
            },
            {
                action: 'upload_file',
                title: 'Файл'
            },
            {
                action: 'location_on',
                title: 'Локация'
            }
        ]
    }),
    user_actions: new Dropdown({
        class: 'more_vert',
        items: [
            {
                action: 'person_add',
                title: 'Добавить пользователя'
            },
            {
                action: 'person_remove',
                title: 'Удалить пользователя'
            }
        ]
    })
});


const chatPage = new ChatPage({ 
    children: [chat, feed]
})

window.addEventListener('DOMContentLoaded', () => {
    renderPage(chatPage);
});