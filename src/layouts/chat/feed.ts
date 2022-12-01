import Block from '../../utils/Block/Block';
import temp from './feedTemplate';

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

export default class ChatFeed extends Block<ChatFeedProps> {
    constructor(props: ChatFeedProps) {
        super('aside', '', props);
    }

    render() {
        return this.compile(temp, { ...this.props });
    }
}
