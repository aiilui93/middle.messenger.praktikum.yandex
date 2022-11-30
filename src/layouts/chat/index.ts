import Block from '../../utils/Block/Block';
import chatTpl from './chat.tmpl'
import feedTpl from './feed.tmpl'
import page from './chatPage.tmpl'
import { LayoutProps } from '../../utils/types/dataTypes'
import Textarea from '../../components/textarea';
import Button from '../../components/button';

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
    textarea?: Textarea;
    button?: Button;
    profile?: string;
    profile_link?: string;
    title?: string;
    events?: {
      click: () => void;
    };
}

export class ChatFeed extends Block<ChatFeedProps> {
    constructor(props: ChatFeedProps) {
      super('aside', '', props);
    }

    render() {
        return this.compile(feedTpl,  { ...this.props});
    }
} 

export class ChatContent extends Block<ChatContentProps> {
    constructor(props: ChatContentProps) {
      super('article', '', props);
    }

    render() {
        return this.compile(chatTpl,  { ...this.props});
    }
}

export class ChatPage extends Block<LayoutProps> {
    constructor(props: LayoutProps) {
      super('div', 'app', props);
    }

    render() {
        return this.compile(page,  { ...this.props});
    }
}