import Block from '../../utils/Block/Block';
import { LayoutProps } from '../../utils/types/dataTypes';
import temp from './pageTemplate';

export default class SettingsPage extends Block<LayoutProps> {
    constructor(props: LayoutProps) {
        super('div', 'app', props);
    }

    render() {
        return this.compile(temp, { ...this.props });
    }
}
