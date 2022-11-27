import Block from "../../utils/Block/Block";
import chatTpl from './chat.tmpl'
import feedTpl from './feed.tmpl'
import pageTpl from './chatPage.tmpl'


type ChatFeedProps = {
    chats?: object[];
    profile?: string;
    profile_link?: string;
    search?: string;
    title?: string;
    events?: {
      click: () => void;
    };
}


type ChatContentProps = {
    attachments?: Record<string, any>;
    user_actions?: Record<string, any>;
    messages?: Record<string, unknown>;
    profile?: string;
    profile_link?: string;
    title?: string;
    events?: {
      click: () => void;
    };
}

type ChatPageProps = {
    children?: object[];
}


export class ChatFeed extends Block<ChatFeedProps> {
    constructor(props: ChatFeedProps) {
      super("aside", "", props);
    }

    render() {
        return this.compile(feedTpl,  { ...this.props});
    }
} 

export class ChatContent extends Block<ChatContentProps> {
    constructor(props: ChatContentProps) {
      super("article", "", props);
    }

    render() {
        return this.compile(chatTpl,  { ...this.props});
    }
}

export class ChatPage extends Block<ChatPageProps> {
    constructor(props: ChatPageProps) {
      super("div", "app", props);
    }

    render() {
        return this.compile(pageTpl,  { ...this.props});
    }
}