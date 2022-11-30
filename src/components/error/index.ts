import Block from '../../utils/Block/Block';
import template from './error.tmpl';

class ErrorItem extends Block<Record<string, unknown>> {
    constructor(props: Record<string, unknown>) {
        super('span', 'error', props); 
    }

    render() {
        return this.compile(template, this.props)
    }
}

export default ErrorItem;