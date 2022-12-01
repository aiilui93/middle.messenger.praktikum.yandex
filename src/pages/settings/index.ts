import createInstances from '../../utils/helpers/createInstances';
import SettingsPage from '../../layouts/settings';
import Popup from '../../layouts/settings/popup';
import settingsFormTpl from '../../layouts/settings/formTemplate';
import Form from '../../components/form';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import FormData from './data';
import '../../styles/settings.scss';
import '../../styles/popup.scss';

const inputsData: Record<string, object> = createInstances(FormData.data.reverse(), Input);
const inputsPassword: Record<string, object> = createInstances(FormData.password.reverse(), Input);

const buttonData = new Button({
    name: 'Сохранить',
    class: 'profile__save',
    events: {
        click: (e) => {
            e.preventDefault();
            if (settingsForm.submitForm(inputsData)) {
                const parent = e.target.closest('.data');
                const profile = parent.querySelector('.profile__data');
                const nav = parent.querySelector('.profile__nav');

                buttonData.hide();

                profile.classList.add('disabled');
                nav.style.display = 'block';
            }
        },
    },
});

buttonData.hide();

const buttonPassword = new Button({
    name: 'Сохранить пароль',
    class: 'password__save',
    events: {
        click: (e) => {
            e.preventDefault();
            if (settingsForm.submitForm(inputsPassword)) {
                const parent = e.target.closest('.profile');
                const data = parent.querySelector('.data');
                const psw = parent.querySelector('.password');
                const nav = parent.querySelector('.profile__nav');

                data.classList.remove('hidden');
                psw.classList.add('hidden');
                nav.style.display = 'block';
            }
        },
    },
});

const settingsForm = new Form({
    title: 'Настройки',
    class: 'settings',
    send: 'Сохранить',
    name: 'dataForm',
    nameProfileForm: 'true',
    redirect: '/settings',
    template: settingsFormTpl,
    fields_data: inputsData,
    fields_password: inputsPassword,
    link_buttons: {
        btn_logout: new Button({
            name: 'Выйти',
            class: 'button-text button-red',
            events: {
                click: () => {
                    window.location.href = '/login';
                },
            },
        }),
        btn_pass: new Button({
            name: 'Изменить пароль',
            class: 'button-text change-password',
            events: {
                click: (e) => {
                    settingsForm.setProps({ namePassForm: 'true', nameProfileForm: '' });

                    const parent = e.target.closest('.profile');
                    const data = parent.querySelector('.data');
                    const psw = parent.querySelector('.password');
                    const nav = parent.querySelector('.profile__nav');

                    data.classList.add('hidden');
                    psw.classList.remove('hidden');
                    nav.style.display = 'none';
                },
            },
        }),
        btn_data: new Button({
            name: 'Изменить данные',
            class: 'button-text change-data',
            events: {
                click: (e) => {
                    settingsForm.setProps({ namePassForm: '', nameProfileForm: 'true' });

                    const parent = e.target.closest('.data');
                    const profile = parent.querySelector('.profile__data');
                    const nav = parent.querySelector('.profile__nav');

                    buttonData.show();

                    profile.classList.remove('disabled');
                    nav.style.display = 'none';
                },
            },
        }),
    },
    button_data: buttonData,
    button_password: buttonPassword,
});

const settingsPopup = new Popup({
    title: 'Загрузите файл',
    id: 'avatar',
    opened: false,
    content: new Form({
        children: {
            button: new Button({
                name: 'Поменять',
                class: 'save-button',
            }),
            input: new Input({
                name: 'avatar',
                label: 'Выбрать файл на компьютере',
                type: 'file',
                required: 'true',
                id: 'avatar',
            }),
        },
    }),
});

const settingsPage = new SettingsPage({
    children: [settingsForm, settingsPopup],
});

export default settingsPage;
