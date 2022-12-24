import Block from '../../utils/Block/Block';
import template from './form';
import Input from '../input';
import '../../styles/form.scss';
import AuthController from '../../controllers/AuthController';
import { SigninData, SignupData } from '../../utils/types/dataTypes';
import withStore from '../../utils/hocs/withStore';

class FormBase extends Block<Record<string, unknown>> {
    constructor(props: Record<string, unknown>) {
        super('div', 'app', props);
    }

    sendData() {
        const values: Record<string, string> = {};
        const name: any = this.props.name as string;
        const formData: any = new FormData(document.forms[name] as HTMLFormElement);

        /* eslint-disable-next-line */
        for (let input of formData.entries() ) {
            values[input[0]] = input[1];
        }

        // выводим данные формы в консоль
        const data = values as unknown;

        switch (name) {
        case 'signup':
            AuthController.signup(data as SignupData);
            break;
        case 'login':
            AuthController.signin(data as SigninData);
            break;
        default:
            break;
        }
    }

    submitForm(inputs: Record<string, object>) {
        let isValid = true;
        Object.values(inputs).forEach((item: any) => {
            if (item instanceof Input) {
                if (isValid) {
                    if (!item.validate()) {
                        isValid = false;
                    }
                }
            }
        });

        if (isValid) {
            this.sendData();
        }

        return isValid;
    }

    render() {
        return this.compile(this.props.template || template, this.props);
    }
}

const withUser = withStore((state) => ({ storeData: { ...state.user }.data }));
const Form = withUser(FormBase);

export default Form;
