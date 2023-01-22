import createInstances from '../../utils/helpers/createInstances';
import SettingsPage from '../../layouts/settings';
import Popup from '../../layouts/settings/popup';
import profileFormTpl from '../../layouts/settings/formTemplate';
import Form from '../../components/form';
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import FormData from './data';
import '../../styles/settings.scss';
import '../../styles/popup.scss';
import Link from '../../components/link';
import { Routes } from '../../utils/types/dataTypes';
import Router from '../../utils/Router/Router';
import AuthController from '../../controllers/AuthController';
import ProfileForm from '../../components/profileForm';
import Image from '../../components/image';

const inputsData: Record<string, object> = createInstances(FormData.data.reverse(), Input);
const inputsPassword: Record<string, object> = createInstances(FormData.password.reverse(), Input);

const buttonData = new Button({
    name: 'Сохранить',
    class: 'profile__save',
    events: {
        click: (e) => {
            e.preventDefault();
            if (profileForm.submitForm(inputsData, 'profileForm')) {
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
            if (profileForm.submitForm(inputsPassword, 'passForm')) {
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

const avatarForm = new Form({
    name: 'avatarForm',
    button: new Button({
        name: 'Поменять',
        class: 'save-button',
        events: {
            click: (e) => {
                e.preventDefault(e);
                profileForm.sendFile('avatarForm');
                settingsPopup.setProps({ opened: false });
            },
        },
    }),
    inputs: new Input({
        name: 'avatar',
        label: 'Выбрать файл на компьютере',
        type: 'file',
        required: 'true',
        id: 'avatar',
    }),
});

const settingsPopup = new Popup({
    title: 'Загрузите файл',
    id: 'avatar',
    opened: false,
    closeBtn: new Button({
        name: '',
        icon: 'close',
        class: 'popup__close',
        events: {
            click: (e) => {
                e.preventDefault();
                settingsPopup.setProps({ opened: false });
            },
        },
    }),
    content: avatarForm,
});

const popupButton = new Button({
    name: '',
    class: 'popup-toggle',
    popup: '#avatar',
    events: {
        click: (e) => {
            e.preventDefault();
            settingsPopup.setProps({ opened: true });
        },
    },
});

const profileForm = new ProfileForm({
    title: 'Настройки',
    class: 'settings',
    send: 'Сохранить',
    popupBtn: popupButton,
    avatar: new Image({
        src: '',
        title: 'Profile photo',
        path: '',
    }),
    popup: settingsPopup,
    redirect: '/settings',
    template: profileFormTpl,
    data: inputsData,
    fields_password: inputsPassword,
    link_buttons: {
        btn_logout: new Button({
            name: 'Выйти',
            class: 'button-text button-red',
            events: {
                click: () => {
                    AuthController.logout();
                },
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
                },
            },
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
                },
            },
        }),
    },
    button_data: buttonData,
    button_password: buttonPassword,
});

const settingsPage = new SettingsPage({
    form: profileForm,
    link: new Link({
        class: 'app__back',
        href: Routes.Chat,
        anchor: '',
        icon: 'arrow_back_ios',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                buttonData.hide();

                const profile = document.querySelector('.profile__data') as HTMLElement;
                const nav = document.querySelector('.profile__nav') as HTMLElement;
                const data = document.querySelector('.data') as HTMLElement;
                const psw = document.querySelector('.password') as HTMLElement;

                if (data) {
                    data.classList.remove('hidden');
                }

                if (psw) {
                    psw.classList.add('hidden');
                }

                if (profile) {
                    profile.classList.add('disabled');
                }

                if (nav) {
                    nav.style.display = 'block';
                }

                buttonData.hide();
                Router.go(Routes.Chat);
            },
        },
    }),
});

export default settingsPage;
