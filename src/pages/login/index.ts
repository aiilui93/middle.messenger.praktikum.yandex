import createInstances from '../../utils/helpers/createInstances';
import Form from '../../components/form/index';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import FormData from './data';
import Link from '../../components/link';
import { Routes } from '../../utils/types/dataTypes';

const inputs: Record<string, object> = createInstances(FormData, Input);

const loginForm = new Form({
    send: 'Войти',
    title: 'Вход',
    name: 'login',
    redirect: Routes.Chat,
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
    link: new Link({
        class: 'form__link',
        href: Routes.Signup,
        anchor: 'Нет аккаунта?'
    }),
});

export default loginForm;
