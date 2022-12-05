import createInstances from '../../utils/helpers/createInstances';
import Form from '../../components/form/index';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import FormData from './data';

const inputs: Record<string, object> = createInstances(FormData, Input);

const loginForm = new Form({
    send: 'Войти',
    title: 'Вход',
    name: 'login',
    url: '/signup',
    redirect: '/chat',
    anchor: 'Нет аккаунта?',
    inputs,
    button: new Button({
        name: 'Войти',
        class: 'send',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                loginForm.submitForm(inputs);
            },
        },
    }),

});

export default loginForm;
