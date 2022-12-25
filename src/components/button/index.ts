import Block from '../../utils/Block/Block';
import template from './button';

type ButtonProps = {
    name: string;
    class?: string;
    icon?: string;
    popup?: any;
    events?: {
        click: (e: any) => void;
    };
}

export default class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super('div', 'button__wrapper', props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
