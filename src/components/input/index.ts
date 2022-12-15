import Block from '../../utils/Block/Block';
import template from './input';
import validateRegExp from '../../utils/helpers/validate';
import { FieldInputs } from '../../utils/types/dataTypes';
import '../../styles/input.scss';

export default class Input extends Block {
    constructor(props: FieldInputs) {
        const events = {
            focusout: () => this.validate(),
        };
        super('div', 'form__row', { ...props, events });
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

    validate = () => {
        console.log(this.props);
        const result: Record<string, any> = validateRegExp(this.element!, this.props.validate_rule, this.props.repeater_name);

        console.log(result);

        if (result.test === false) {
            this.showError(result.error, result.value);
            return false;
        }
        this.hideError(result.value);

        return true;
    };

    render() {
        return this.compile(template, { ...this.props });
    }
}
