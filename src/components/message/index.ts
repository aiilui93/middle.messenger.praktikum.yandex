import Block from '../../utils/Block/Block';
import template from './message';

type MessageProps = {
    image?: string,
    image_alt?: string,
    position: string,
    status: string,
    text?: string,
    time: Date,
    timeText?: string
}

export default class Message extends Block<MessageProps> {
    constructor(props: MessageProps) {
        super('div', '', props);
        this.props.timeText = ` ${props.time.getHours()}:${props.time.getMinutes()}`;
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
