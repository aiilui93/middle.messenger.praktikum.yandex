import Block from '../../utils/Block/Block';
import template from './dropdown';
import '../../styles/dropdown.scss';

type DropdownProps = {
    class?: string;
    items?: Record<string, any>[];
    add_user?: unknown;
    remove_user?: unknown;
    add_photo?: unknown;
    add_file?: unknown;
    add_location?: unknown;
    events?: {
        click: (e: Event) => void;
    };
}

export default class Dropdown extends Block<DropdownProps> {
    constructor(props: DropdownProps) {
        super(
            'div',
            'dropdown',
            {
                ...props,
                events: {
                    // любой инстанс класса dropdown в любом случае имеет такое поведение при клике
                    click: (e: Record<string, any>) => {
                        const target = e.target.classList;
                        const condition = target.contains('dropdown__item') || target.contains('icon_dropdown__item');
                        const dropdown = e.target.closest('.dropdown');

                        if (!condition && dropdown) {
                            const content = dropdown.querySelector('.dropdown__content');
                            const itemPos = dropdown.getBoundingClientRect().top;
                            content.classList.toggle('show');

                            const contentHeight: number = content.clientHeight;
                            const offset: number = itemPos + contentHeight;

                            if (offset > window.innerHeight) {
                                content.classList.add('bottom');
                            } else {
                                content.classList.remove('bottom');
                            }
                        }
                    },
                },
            },
        );
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
