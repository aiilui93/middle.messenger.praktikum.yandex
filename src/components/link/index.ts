import Block from '../../utils/Block/Block';
import template from './link';

type LinkProps = {
    class: string;
    symlink: string;
    anchor: string;
    icon?: string;
    events?: {
        click: (e: any) => void;
    };
}

export default class Link extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super('div', '', props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
