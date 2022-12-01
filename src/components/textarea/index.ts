import Block from '../../utils/Block/Block';
import template from './textarea';
import '../../styles/input.scss';
import validateRegExp from '../../utils/helpers/validate';

export default class Textarea extends Block {
    constructor(props: Record<string, any>) {
        const events = {
            focusout: (e: Event) => this.focusOut(e),
        };
        super('div', 'textarea', { ...props, events });
    }

    focusOut = (e: Event):void => {
        const result: Record<string, any> = validateRegExp(this.element!, this.props.validate_rule);

        if (result.test === false) {
            this.showError(result.error, result.value);
        } else {
            this.hideError(result.value);
        }
    };

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
