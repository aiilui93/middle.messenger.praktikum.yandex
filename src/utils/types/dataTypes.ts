export interface FieldInputs {
    name: string;
    label: string;
    type: string;
    required?: 'true';
    id?: string;
    events?: Record<string, () => void>
};

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