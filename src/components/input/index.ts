import Block from '../../utils/Block/Block';
import template from './input';
import validateRegExp from '../../utils/helpers/validate';
import { FieldInputs } from '../../utils/types/dataTypes';
import '../../styles/input.scss';
import withStore from '../../utils/hocs/withStore';

class InputBase extends Block {
    constructor(props: FieldInputs) {
        const events = {
            focusout: () => this.validate(),
            change: () => this.showFileName(),
        };
        super('div', 'form__row', { ...props, events });
    }

    showError = (errorText: string, valueText: string):void => {
        this.setProps({ error: errorText });
        this.setProps({ value: valueText });
        this.setProps({ show_error: 'show' });
    };

    hideError = (valueText: string):void => {
        this.setProps({ error: '' });
        this.setProps({ value: valueText });
        this.setProps({ show_error: '' });
    };

    validate = () => {
        if (this.props.validate_rule) {
            const result: Record<string, any> = validateRegExp(this.element!, this.props.validate_rule, this.props.repeater_name);

            if (result.test === false) {
                this.showError(result.error, result.value);
                return false;
            }
            this.hideError(result.value);
        }
        return true;
    };

    showFileName = () => {
        if (this.props.type === 'file') {
            const file: HTMLInputElement | null = document.querySelector(`input[name="${this.props.name}"]`);
            if (file && file.files) {
                const input: HTMLInputElement = document.querySelector(`input[name="${this.props.name}"]`) as HTMLInputElement;
                if (input) {
                    const label: any = input.labels;
                    label[0].innerText = file.files[0].name;
                }
            }
        }
    };

    render() {
        if (this.props.storeData && this.props.storeData[this.props.name] && this.props.value === '') {
            try {
                this.props.value = this.props.storeData[this.props.name];
            } catch (error) {
                console.log(`Data was not received from Store. Name: ${this.props.name}, Value:  ${this.props.value}`);
            }
        }

        return this.compile(template, { ...this.props });
    }
}

const withUser = withStore((state) => ({ storeData: { ...state.user }.data }));
const Input = withUser(InputBase);
export default Input;
