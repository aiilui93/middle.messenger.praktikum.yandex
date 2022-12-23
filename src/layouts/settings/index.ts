import Block from '../../utils/Block/Block';
import withStore from '../../utils/hocs/withStore';
import { LayoutProps } from '../../utils/types/dataTypes';
import temp from './pageTemplate';

class SettingsPageBase extends Block<LayoutProps> {
    constructor(props: LayoutProps) {
        super('div', 'app', props);
    }

    render() {
        return this.compile(temp, { ...this.props });
    }
}

const withUser = withStore((state) => ({ ...state.user }));
const SettingsPage = withUser(SettingsPageBase);
export default SettingsPage;
