import Block from '../../utils/Block/Block';
import template from './textarea';
import '../../styles/input.scss';

export default class Textarea extends Block {
    constructor(props: Record<string, any>) {
        super('div', 'textarea', { ...props });
    }

    showError = (error: string, value: string):void => {
        this.props.error = error;
        this.props.value = value;
        this.props.show_error = 'show';
    };

    hideError = (value: string):void => {
        this.props.error = '';
        this.props.value = value;
        this.props.show_error = '';
    };

    render() {
        return this.compile(template, { ...this.props });
    }
}
