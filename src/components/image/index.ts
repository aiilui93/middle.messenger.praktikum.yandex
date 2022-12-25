import Block from '../../utils/Block/Block';
import withStore from '../../utils/hocs/withStore';
import template from './image';

type ImageProps = {
    src: string;
    title: string;
    path?: string;
}

class ImageBase extends Block<ImageProps> {
    constructor(props: ImageProps) {
        super('div', 'image__wrapper', props);
        this.props.path = 'https://ya-praktikum.tech/api/v2/resources';
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}

const withUser = withStore((state) => ({ storeData: { ...state.user }.data }));
const Image = withUser(ImageBase);

export default Image;
