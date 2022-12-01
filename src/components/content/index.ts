import Block from '../../utils/Block/Block';
import template from './content';

class Content extends Block<Record<string, unknown>> {
    constructor(props: Record<string, unknown>) {
        super('div', 'app', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}

export default Content;
