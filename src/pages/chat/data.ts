import { MessagesData, ChatListData } from "../../utils/types/dataTypes";
import {v4 as makeUUID} from 'uuid';

export const messages: MessagesData[] = [
    {
        name: `name-${makeUUID()}`,
        position: "left",
        status: "read",
        text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. \n Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        time: new Date('December 17, 2022 03:24:00')
    },
    {
        name: `name-${makeUUID()}`,
        image: "photo.png",
        image_alt: "Фотокамера SWC",
        position: "left",
        status: "read",
        time: new Date('December 17, 2022 10:24:00')
    },
    {
        name: `name-${makeUUID()}`,
        position: "right",
        status: "read",
        text: "Круто!",
        time: new Date('December 17, 2022 09:24:00')
    },
    {
        name: `name-${makeUUID()}`,
        position: "left",
        status: "read",
        text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. \n Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        time: new Date('December 17, 2021 08:24:00')
    },
    {
        name: `name-${makeUUID()}`,
        image: "photo.png",
        image_alt: "Фотокамера SWC",
        status: "read",
        position: "left",
        time: new Date('December 17, 2021 06:24:00')
    },
    {
        name: `name-${makeUUID()}`,
        position: "right",
        status: "unread",
        text: "Круто!",
        time: new Date('Janyary 17, 2021 01:24:00')
    }
];


export const chatData: ChatListData[] = [
    {
        author: "Вы",
        avatar: "",
        last_message: "Изображение",
        name: "Владимир Ильич",
        time: "10:49",
        unread: 2
    },
    {
        avatar: "",
        last_message: "Мяу",
        name: "Моя кошка",
        time: "12:00"
    },
    {
        avatar: "",
        last_message: "Друзья, у меня для вас особенный выпуск новостей!...",
        name: "Илья",
        time: "15:12",
        unread: 4
    },
    {
        author: "Вы",
        avatar: "",
        last_message: "Круто!",
        name: "Вадим",
        time: "Пт"
    },
    {
        avatar: "",
        last_message: "И Human Interface Guidelines и Material Design рекомендуют...",
        name: "тет-а-теты",
        time: "Ср"
    },
    {
        avatar: "",
        last_message: "Миллионы россиян ежедневно проводят десятки часов свое...",
        name: "1, 2, 3",
        time: "Пн"
    },
    {
        avatar: "",
        last_message: "В 2008 году художник Jon Rafman начал собирать...",
        name: "Design Destroyer",
        time: "Пн"
    },
    {
        avatar: "",
        last_message: "В 2008 году художник Jon Rafman начал собирать...",
        name: "Day.",
        time: "Пн"
    },
    {
        avatar: "",
        last_message: "А я чё? Оно само не полетело! Я, кстати, новую песню записал...",
        name: "Дмитрий Рогозин",
        time: "12 Апр 2022"
    },
    {
        avatar: "",
        last_message: "Он такой, а я такая, а он мне...",
        name: "Ленка",
        time: "12 Апр 2022"
    },
    {
        author: "Вы",
        avatar: "",
        last_message: "Пирожочки!",
        name: "Мама",
        time: "11 Апр 2022"
    }
]
