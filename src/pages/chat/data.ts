import { Message, ChatInfo } from '../../utils/types/dataTypes';

export const messages: Message[] = [
    {
        chat_id: 1,
        time: 'December 17, 2022 03:24:00',
        type: 'message',
        user_id: '1',
        mine: false,
        content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. \n Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    },
    {
        chat_id: 1,
        time: 'December 17, 2022 03:24:00',
        type: 'message',
        user_id: '1',
        mine: false,
        content: '',
        file: {
            id: 1,
            user_id: 2,
            path: 'photo.png',
            filename: 'Фотокамера SWC',
            content_type: 'image/png',
            content_size: 123,
            upload_date: 'December 18, 2022 05:50:00',
        },
    },
    {
        chat_id: 1,
        time: 'December 17, 2022 03:29:00',
        type: 'message',
        user_id: '2',
        mine: true,
        content: 'Круто!',
    },
];

export const chatData: ChatInfo[] = [
    {
        id: 1,
        title: 'Чат-рыба 1',
        avatar: '',
        unread_count: 2,
        selectedChat: true,
        last_message: {
            user: {
                first_name: 'Иван',
                second_name: 'Иванов',
                login: 'Vano',
                email: 'Vano1234@ryba.ru',
                phone: '+7 (000) 000-00-00',
            },
            time: '10:49',
            content: 'Рыбный текст последнего сообщения',
        },
    },
    {
        id: 2,
        title: 'Чат-рыба 2',
        avatar: '/static/img/pixel.png',
        unread_count: 1,
        last_message: {
            user: {
                first_name: 'Ирина',
                second_name: 'Петрова',
                login: 'Irin',
                email: 'Irin1234@ryba.ru',
                phone: '+7 (000) 333-00-00',
            },
            time: '3:12',
            content: 'Второй рыбный текст последнего сообщения',
        },
    },
    {
        id: 3,
        title: 'Чат-рыба 3',
        avatar: '/static/img/photo.png',
        unread_count: 0,
        last_message: {
            user: {
                first_name: 'Кошка',
                second_name: 'Кошачья',
                login: 'Meow',
                email: 'Meow1234@Meow.ru',
                phone: '+7 (444) 000-00-00',
            },
            time: '12:00',
            content: 'Третий рыбный текст последнего сообщения',
        },
    },
];
