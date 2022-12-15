export type ObjectLiteral = Record<string, any>;

export enum Routes {
    Index = '/',
    Login = '/login',
    Signup = '/signup',
    Settings = '/settings',
    Chat = '/chat'
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

export interface MessagesData {
    name: string,
    image?: string,
    image_alt?: string,
    position: string,
    status: string,
    text?: string,
    time: Date,
    timeText?: string
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
    id: number;
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
    avatar: string;
}
