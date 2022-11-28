import Block from '../../utils/Block/Block';
import template from './form.tmpl';
import '../../styles/form.scss';

class Form extends Block<Record<string, unknown>> {
    constructor(props: Record<string, unknown>) {
        super('div', 'form', props); 
    }

    render() {
        return this.compile(template, this.props)
    }
}

export default Form;