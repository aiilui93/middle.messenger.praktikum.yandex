import Block from '../../utils/Block/Block';
import Button from '../../components/button';
import temp from './formTemplate';

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

export default class SettingsForm extends Block<SettingsProps> {
    constructor(props: SettingsProps) {
        super('div', 'profile', props);
    }

    render() {
        return this.compile(temp, { ...this.props });
    }
}
