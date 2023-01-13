import Block from '../../utils/Block/Block';
import withStore from '../../utils/hocs/withStore';
import { ImageProps } from '../../utils/types/dataTypes';
import template from './image';

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
