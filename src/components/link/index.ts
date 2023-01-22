import Block from '../../utils/Block/Block';
import Router from '../../utils/Router/Router';
import template from './link';

type LinkProps = {
    class?: string;
    href: string;
    anchor: string;
    icon?: string;
    events?: {
        click: (e: any) => void;
    };
}

export default class Link extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super('div', '', {
            ...props,
            events: {
                click: (e: any) => this.navigate(e),
            },
        });
    }

    navigate(e: Event) {
        e.preventDefault();
        Router.go(this.props.href);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
