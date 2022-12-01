import Block from '../../utils/Block/Block';
import temp from './popupTemplate';

type PopupProps = {
    title: string;
    id: string;
    opened: boolean;
    content: any
}

export default class Popup extends Block<PopupProps> {
    constructor(props: PopupProps) {
        super('div', 'popup', props);
    }

    open() {
        this.setProps({
            opened: true,
        });
    }

    close() {
        this.setProps({
            opened: false,
        });
    }

    render() {
        return this.compile(temp, { ...this.props });
    }
}
