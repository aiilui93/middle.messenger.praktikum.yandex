import ChatPage from '../../layouts/chat';
import ChatFeed from '../../layouts/chat/feed';
import ChatContent from '../../layouts/chat/chat';
import Dropdown from '../../components/dropdown';
import Button from '../../components/button';
import '../../styles/chat.scss';
import Link from '../../components/link';
import { Routes } from '../../utils/types/dataTypes';
import Router from '../../utils/Router/Router';
import Popup from '../../layouts/settings/popup';
import Input from '../../components/input';
import Form from '../../components/form';

const createChatPopup = new Popup({
    title: 'Введите название чата',
    id: 'chatName',
    opened: false,
    closeBtn: new Button({
        name: '',
        icon: 'close',
        class: 'popup__close',
        events: {
            click: (e) => {
                e.preventDefault();
                createChatPopup.setProps({ opened: false });
            },
        },
    }),
    content: new Form({
        name: '',
        inputs: new Input({
            name: 'chatName',
            label: '',
            type: 'text',
            required: 'required',
            validate_rule: 'chatname',
        }),
        button: new Button({
            name: 'Создать чат',
            class: 'save-button',
            events: {
                click: (e) => {
                    e.preventDefault(e);
                    if (feed.createChat()) {
                        createChatPopup.setProps({
                            opened: false,
                        });
                    }
                },
            },
        }),
    }),
});

const removeChatUsersPopup = new Popup({
    title: 'Удалить пользователя из чата',
    id: 'removeUser',
    opened: false,
    closeBtn: new Button({
        name: '',
        icon: 'close',
        class: 'popup__close',
        events: {
            click: (e) => {
                e.preventDefault();
                removeChatUsersPopup.setProps({ opened: false });
            },
        },
    }),
    content: new Form({
        name: '',
        inputs: new Input({
            name: 'userIdRemove',
            label: 'Введите id пользователя',
            type: 'text',
            required: 'required',
            validate_rule: 'number',
        }),
        button: new Button({
            name: 'Удалить пользователя',
            class: 'save-button',
            events: {
                click: (e) => {
                    e.preventDefault(e);
                    if (feed.removeUserFromChat()) {
                        removeChatUsersPopup.setProps({
                            opened: false,
                        });
                    }
                },
            },
        }),
    }),
});

const addChatUsersPopup = new Popup({
    title: 'Добавить пользователя в чат',
    id: 'addUser',
    opened: false,
    closeBtn: new Button({
        name: '',
        icon: 'close',
        class: 'popup__close',
        events: {
            click: (e) => {
                e.preventDefault();
                addChatUsersPopup.setProps({ opened: false });
            },
        },
    }),
    content: new Form({
        name: '',
        inputs: new Input({
            name: 'userIdAdd',
            label: 'Введите id пользователя',
            type: 'text',
            required: 'required',
            validate_rule: 'number',
        }),
        button: new Button({
            name: 'Добавить пользователя',
            class: 'save-button',
            events: {
                click: (e) => {
                    e.preventDefault(e);
                    if (feed.addUserToChat()) {
                        addChatUsersPopup.setProps({
                            opened: false,
                        });
                    }
                },
            },
        }),
    }),
});

const feed = new ChatFeed({
    popup: createChatPopup,
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
    createChat: new Button({
        name: 'Добавить чат',
        class: 'feed__create',
        icon: 'add',
        events: {
            click: () => {
                createChatPopup.setProps({
                    opened: true,
                });
            },
        },
    }),
});

const chat = new ChatContent({
    addUserPopup: addChatUsersPopup,
    removeUserPopup: removeChatUsersPopup,
    attachments: new Dropdown({
        class: 'attach_file',
        add_photo: new Button({
            icon: 'add_photo_alternate',
            name: 'Фото или Видео',
            class: 'dropdown__item',
        }),
        add_file: new Button({
            icon: 'upload_file',
            name: 'Файл',
            class: 'dropdown__item',
        }),
        add_location: new Button({
            icon: 'location_on',
            name: 'Локация',
            class: 'dropdown__item',
        }),
    }),
    user_actions: new Dropdown({
        class: 'more_vert',
        add_user: new Button({
            icon: 'person_add',
            name: 'Добавить пользователя',
            class: 'dropdown__item',
            events: {
                click: () => {
                    addChatUsersPopup.setProps({
                        opened: true,
                    });
                },
            },
        }),
        remove_user: new Button({
            icon: 'person_remove',
            name: 'Удалить пользователя',
            class: 'dropdown__item',
            events: {
                click: () => {
                    removeChatUsersPopup.setProps({
                        opened: true,
                    });
                },
            },
        }),
    }),
});

const chatPage = new ChatPage({
    children: [chat, feed],
});

export default chatPage;
