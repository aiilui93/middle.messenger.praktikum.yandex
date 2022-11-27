import createInstances from '../../utils/helpers/createInstances';
import Form from '../../components/form';
import renderPage from '../../utils/render/renderPage'
import Button from '../../components/button';
import Input from '../../components/input';
import FormData from './data';

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
                console.log('кликнули')
            }
        },
    })
});

window.addEventListener('DOMContentLoaded', () => {
    renderPage(signupForm);
});