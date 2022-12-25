export type ObjectLiteral = Record<string, any>;

export type PlainObject<T = any> = {
    [k in string]: T;
}

export type Props<P extends Record<string, unknown> = any> = { events?: Record<string, (e: object) => void> } & P;

export enum Routes {
    Index = '/',
    Login = '/login',
    Signup = '/sign-up',
    Settings = '/settings',
    Chat = '/messenger',
    Error404 = '/404',
    Error500 = '/500',
}

export interface FieldInputs {
    name: string,
    label: string,
    type: string,
    required: string,
    id?: string,
    validate_rule?: string,
    value?: string,
    repeater_name?: string,
    events?: {
        focusin: (e: Event) => void;
        focusout: (e: Event) => void;
    };
}

export interface ChatListData {
    author?: string;
    avatar?: string;
    last_message: string;
    name: string;
    time: string;
    unread?: number
}

export type LayoutProps = {
    children?: object[];
    link?: unknown;
};

export interface SigninData {
    login: string;
    password: string;
}

export interface SignupData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface User {
    id?: number;
    first_name: string;
    second_name: string;
    display_name?: string;
    login: string;
    email: string;
    password?: string;
    phone: string;
    avatar?: string;
}

export interface Password {
    oldPassword: string;
    newPassword: string;
}

export interface ChatInfo {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    selectedChat?: boolean;
    last_message: {
      user: User,
      time: string;
      content: string;
    }
}

export interface Message {
    name?: string,
    chat_id: number;
    time: string;
    timeText?: string;
    type: string;
    user_id: string;
    content: string;
    mine?: boolean;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    }
}

export interface State {
    user: User;
    chats: ChatInfo[];
    messages: Record<number, Message[]>;
    selectedChat?: number;
}
