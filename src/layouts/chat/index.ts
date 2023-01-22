import chatController from '../../controllers/ChatController';
import Block from '../../utils/Block/Block';
import { LayoutProps } from '../../utils/types/dataTypes';
import temp from './pageTemplate';

export default class ChatPage extends Block<LayoutProps> {
    constructor(props: LayoutProps) {
        super('div', 'app', props);
    }

    init(): void {
        chatController.fetchChats()
            .catch(() => false)
            .finally(() => {
                console.log('Получили чаты');
            });
    }

    render() {
        return this.compile(temp, { ...this.props });
    }
}
