
export type ObjectLiteral = Record<string, any>;

export interface FieldInputs {
    name: string,
    label: string,
    type: string,
    required: string,
    id?: string,
    validate_rule?: string,
    value?: string,
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
};

export interface ChatListData {
    author?: string;
    avatar?: string;
    last_message: string;
    name: string;
    time: string;
    unread?: number
};

export type LayoutProps = {
    children?: object[];
};
