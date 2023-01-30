import createInstances from '../../utils/helpers/createInstances';
import Form from '../../components/form';
import Button from '../../components/button';
import Input from '../../components/input';
import FormData from './data';
import '../../styles/styles.scss';
import '../../styles/form.scss';
import Link from '../../components/link';
import { Routes } from '../../utils/types/dataTypes';

const inputs = createInstances(FormData.reverse(), Input);

const signupForm = new Form({
    title: 'Регистрация',
    name: 'signup',
    redirect: Routes.Chat,
    inputs,
    button: new Button({
        name: 'Зарегистрироваться',
        class: 'send',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                signupForm.submitForm(inputs);
            },
        },
    }),
    link: new Link({
        class: 'form__link',
        href: Routes.Login,
        anchor: 'Войти'
    }),
});

export default signupForm;
