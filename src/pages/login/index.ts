import renderPage from '../../utils/render/renderPage';
import createInstances from '../../utils/helpers/createInstances';
import Form from '../../components/form/index';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import FormData from './data';

const inputs = createInstances(FormData, Input);

const loginForm = new Form({ 
    send: 'Войти',
    title: 'Вход',
    url: '/pages/signup/index.html',
    anchor: 'Нет аккаунта?',
    inputs: inputs,
    button: new Button({
        name: "Войти",
        class: "send",
        events: {
            click: () => {
                console.log('кликнули')
            }
        },
    }),
    
});

export default loginForm;

window.addEventListener('DOMContentLoaded', () => {
    renderPage(loginForm);
});