import renderPage from '../../utils/render/renderPage';
import createInstances from '../../utils/helpers/createInstances';
import { SettingsForm } from '../../layouts/settings';
import { SettingsPage } from '../../layouts/settings';
import { Popup } from '../../layouts/settings';
import Form from '../../components/form';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import FormData from './data';
import '../../styles/settings.scss';
import '../../styles/popup.scss';

const inputs_data: Record<string, object> = createInstances(FormData.data, Input);
const inputs_password: Record<string, object> = createInstances(FormData.password, Input);

const buttonData = new Button({
    name: 'Сохранить',
    class: 'profile__save',
    events: {
        click: (e) => {
            e.preventDefault();
            const parent = e.target.closest('.data');
            const profile = parent.querySelector('.profile__data');
            const nav = parent.querySelector('.profile__nav');

            buttonData.hide();

            profile.classList.add('disabled');
            nav.style.display = 'block';
        }
    },
});

buttonData.hide();

const buttonPassword = new Button({
    name: 'Сохранить пароль',
    class: 'password__save',
    events: {
        click: (e) => {
            e.preventDefault();
            const parent = e.target.closest('.profile');
            const data = parent.querySelector('.data');
            const psw = parent.querySelector('.password');
            const nav = parent.querySelector('.profile__nav');

            data.classList.remove('hidden');
            psw.classList.add('hidden');
            nav.style.display = 'block';
        }
    },
});

const settingsForm = new SettingsForm({ 
    title: 'Настройки',
    class: 'settings',
    send: 'Сохранить',
    fields_data: inputs_data,
    fields_password: inputs_password,
    link_buttons: {
        btn_logout: new Button({
            name: 'Выйти',
            class: 'button-text button-red',
            events: {
                click: () => {
                    window.location.href = '/pages/login/index.html'
                }
            },
        }),
        btn_pass: new Button({
            name: 'Изменить пароль',
            class: 'button-text change-password',
            events: {
                click: (e) => {
                    const parent = e.target.closest('.profile');
                    const data = parent.querySelector('.data');
                    const psw = parent.querySelector('.password');
                    const nav = parent.querySelector('.profile__nav');

                    data.classList.add('hidden');
                    psw.classList.remove('hidden');
                    nav.style.display = 'none';
                }
            }
        }),
        btn_data: new Button({
            name: 'Изменить данные',
            class: 'button-text change-data',
            events: {
                click: (e) => {
                    const parent = e.target.closest('.data');
                    const profile = parent.querySelector('.profile__data');
                    const nav = parent.querySelector('.profile__nav');

                    buttonData.show();

                    profile.classList.remove('disabled');
                    nav.style.display = 'none';
                }
            }
        }), 
    },
    button_data: buttonData,
    button_password: buttonPassword
});

const settingsPopup = new Popup({ 
    title: 'Загрузите файл',
    id: 'avatar',
    opened: false,
    content: new Form({
        children: {
            button: new Button({
                name: "Поменять",
                class: "save-button",
                events: {
                    click: () => {
                        console.log('Грузим аватарку')
                    }
                }
            }),
            input: new Input({
                name: 'avatar',
                label: 'Выбрать файл на компьютере',
                type: 'file',
                required: 'true',
                id: 'avatar',
                events: {
                    blur: () => {
                        console.log('on blur')
                    }
                }
            })
        }
    })
});

const settingsPage = new SettingsPage({ 
    children: [settingsForm, settingsPopup]
});

window.addEventListener('DOMContentLoaded', () => {
    renderPage(settingsPage);
});