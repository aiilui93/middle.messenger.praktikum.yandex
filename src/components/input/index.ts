import Block from "../../utils/Block/Block";
import template from "./input.tmpl";

type InputProps = {
    name: string,
    label: string,
    type: string,
    required: string,
    id?: string,
    events?: {
      blur: () => void;
    };
}

export default class Input extends Block<InputProps> {
    constructor(props: InputProps) {
      super("div", "form__row", props);
    }

    render() {
        return this.compile(template,  { ...this.props});
    }
} 


