import Block from '../../utils/Block/Block';
import Textarea from '../../components/textarea';
import Button from '../../components/button';
import temp from './chatTemplate';

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

export default class ChatContent extends Block<ChatContentProps> {
    constructor(props: ChatContentProps) {
        super('article', '', props);
    }

    render() {
        return this.compile(temp, { ...this.props });
    }
}
