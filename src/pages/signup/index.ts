import createInstances from '../../utils/helpers/createInstances';
import Form from '../../components/form';
import renderPage from '../../utils/render/renderPage'
import Button from '../../components/button';
import Input from '../../components/input';
import FormData from './data';
import '../../styles/styles.scss';
import '../../styles/form.scss';

const inputs = createInstances(FormData, Input);

const signupForm = new Form({ 
    send: 'Зарегистрироваться',
    title: 'Регистрация',
    url: '/pages/login/index.html',
    anchor: 'Войти',
    inputs: inputs,
    button: new Button({
        name: "Войти",
        class: "send",
        events: {
            click: () => {
                window.location.href = '/pages/chat/index.html'
            }
        },
    })
});

window.addEventListener('DOMContentLoaded', () => {
    renderPage(signupForm);
});