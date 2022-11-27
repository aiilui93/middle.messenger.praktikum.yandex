import Block from '../../utils/Block/Block';
import template from './form.tmpl';

class Form extends Block {
    constructor(props: Record<string, unknown>) {
        super('div', 'form', props); 
    }

    render() {
        return this.compile(template, this.props)
    }
}

export default Form;