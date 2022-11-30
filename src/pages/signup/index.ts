import createInstances from '../../utils/helpers/createInstances';
import Form from '../../components/form';
import Button from '../../components/button';
import Input from '../../components/input';
import FormData from './data';
import '../../styles/styles.scss';
import '../../styles/form.scss';

const inputs = createInstances(FormData.reverse(), Input);

const signupForm = new Form({ 
    title: 'Регистрация',
    url: '/login',
    anchor: 'Войти',
    inputs: inputs,
    button: new Button({
        name: 'Зарегистрироваться',
        class: 'send',
        events: {
            click: () => {
                window.location.href = '/chat'
            }
        },
    })
});

export default signupForm;