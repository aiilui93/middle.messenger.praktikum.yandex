import Block from '../../utils/Block/Block';
import temp from './popupTemplate';
import withStore from '../../utils/hocs/withStore';
import store from '../../utils/Store/Store';

type PopupProps = {
    title: string;
    id: string;
    chatName?: string;
    closeBtn: unknown;
    opened: boolean;
    content: any
}

class PopupBase extends Block<PopupProps> {
    constructor(props: PopupProps) {
        super('div', '', props);
    }

    open() {
        const name: string = store.getState().selectedChatName;

        this.setProps({
            opened: true,
            chatName: `«${name}»`
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

const withUser = withStore((state) => ({ storeData: { ...state.user }.data }));
const Popup = withUser(PopupBase);

export default Popup;
