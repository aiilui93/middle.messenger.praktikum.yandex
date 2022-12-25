import Block from '../../utils/Block/Block';
import getTime from '../../utils/helpers/getTime';
import template from './message';

export default class Message extends Block<Record<string, unknown>> {
    constructor(props: Record<string, unknown>) {
        super('div', '', props);
    }

    render() {
        // Перед рендером дату надо представить в ином виде
        if (this.props.time) {
            this.setProps({
                timeText: getTime(this.props.time as string),
            });
        }
        return this.compile(template, { ...this.props });
    }
}
