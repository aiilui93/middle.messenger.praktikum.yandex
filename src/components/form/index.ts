import Block from '../../utils/Block/Block';
import template from './form.tmpl';
import '../../styles/form.scss';
import Input from '../input';

class Form extends Block<Record<string, unknown>> {
    constructor(props: Record<string, unknown>) {
        super('div', 'app', props); 
    }

    showData() {
        const values: Record<string, string> = {};
        const name: any = this.props.name as string;
        const formData: any = new FormData(document.forms[name] as HTMLFormElement);

        for (let input of formData.entries() ) {
            values[input[0]] = input[1]
        }

        //выводим данные формы в консоль
        console.log(values)
    }

    submitForm(inputs: Record<string, object>) {

        let isValid = true;
        Object.values(inputs).forEach( (item: any) => {
            if (item instanceof Input) {
                if (isValid) {
                    if (!item.validate()) {
                        isValid = false;
                    } 
                }
            } 
        })

        if (isValid) {
            this.showData()
            //раньше тут был переход в чат, сейчас выводим данные формы в консоль, затем попадаем в чат
            setTimeout(() => {
                window.location.href = this.props.redirect as string
            }, 2000);
        }

        return isValid;
    }

    render() {
        return this.compile(this.props.template || template, this.props)
    }
}

export default Form;