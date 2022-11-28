import Block from '../../utils/Block/Block';
import page from './settingsPage.tmpl'
import settingsForm from './form.tmpl'
import settingsPopup from './popup.tmlp'
import { LayoutProps } from '../../utils/types/dataTypes';
import Button from '../../components/button';

type SettingsProps = {
    title: string;
    class: string;
    send: string;
    fields_data: Record<string, object>;
    fields_password: Record<string, object>;
    link_buttons: Record<string, object>;
    button_data: Button;
    button_password: Button;
}

type PopupProps = {
    title: string;
    id: string;
    opened: boolean;
    content: any
}

export class SettingsForm extends Block<SettingsProps> {
    constructor(props: SettingsProps) {
        super('div', 'profile', props)
    }

    render() {
        return this.compile(settingsForm, { ...this.props });
    }
}

export class Popup extends Block<PopupProps> {
    constructor(props: PopupProps) {
        super('div', 'popup', props)
    }

    open() {
        this.setProps({
            opened: true
        });
    }

    close() {
        this.setProps({
            opened: false
        });
    }

    render() {
        return this.compile(settingsPopup, { ...this.props });
    }
}

export class SettingsPage extends Block<LayoutProps> {
    constructor(props: LayoutProps) {
        super('div', 'app', props)
    }

    render() {
        return this.compile(page, { ...this.props });
    }
}