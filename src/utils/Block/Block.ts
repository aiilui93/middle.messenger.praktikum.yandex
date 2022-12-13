import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import EventBus from '../EventBus/EventBus';

type BlockEvents<P = any> = {
    init: [];
    'flow:component-did-mount': [];
    'flow:component-did-update': [P, P];
    'flow:render': [];
}

type Props<P extends Record<string, unknown> = any> = { events?: Record<string, (e: object) => void> } & P;

class Block<P extends Record<string, unknown> = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    } as const;

    public id = makeUUID();

    public children: Record<any, Block>;

    protected props: Props<P>;

    private eventBus: () => EventBus<BlockEvents<Props<P>>>;

    private _element: HTMLElement | null = null;

    private _meta: { tagName: string; className: string; props: any; };

    protected constructor(tagName = 'div', className = '', propsWithChildren: Props<P> = {} as Props<P>) {
        const { children, props } = this._getChildren(propsWithChildren);

        const eventBus = new EventBus();

        this._meta = {
            tagName,
            className,
            props,
        };

        this.children = children;

        this.props = this._makePropsProxy({ ...props, id: this.id });

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildren(propsWithChildren: Props<P>): { props: Props<P>, children: Record<string, Block> } {
        const children: Record<string, Block> = {};
        const props = {} as Record<string, unknown>;

        Object.entries(propsWithChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                if (typeof value === 'object') {
                    Object.entries(value as object).forEach(([k, v]) => {
                        if (v instanceof Block) {
                            children[key] = value as any;
                        }
                    });
                }

                props[key] = value;
            }
        });

        return { props: props as Props<P>, children };
    }

    _registerEvents(eventBus: EventBus<BlockEvents>) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _addEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            this._element?.removeEventListener(eventName, events[eventName]);
        });
    }

    _createResources() {
        const { tagName, className } = this._meta;
        this._element = this._createDocumentElement(tagName);
        this._element.className = className;
    }

    protected init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();

        Object.values(this.children).forEach((child) => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps: Props<P>, newProps: Props<P>) {
        const response = this.componentDidUpdate(oldProps, newProps);

        if (!response) {
            return;
        }

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidUpdate(oldProps: Props<P>, newProps: Props<P>) {
        return JSON.stringify(newProps) !== JSON.stringify(oldProps);
    }

    setProps = (nextProps: Partial<Props<P>>) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    protected compile(template: (context: any) => string, context: any) {
        const propsAndStubs = { ...context };

        Object.entries(this.children).forEach(([name, content]) => {
            Object.entries(content as object).forEach(([key, value]) => {
                if (value instanceof Block) {
                    propsAndStubs[name] = `<div data-id='${value.id}'></div>`;
                }
            });

            if (content.id === undefined) {
                content.id = makeUUID();
            }

            propsAndStubs[name] = `<div data-id='${content.id}'></div>`;
        });

        const html = Handlebars.compile(template)(propsAndStubs);

        const fragment = document.createElement('template');

        fragment.innerHTML = html;

        Object.entries(this.children).forEach(([name, component]) => {
            Object.entries(component as object).forEach(([key, value]) => {
                if (value instanceof Block) {
                    const stubParent = fragment.content.querySelector(`[data-id="${component.id}"]`);
                    if (stubParent) {
                        stubParent.after(value.getContent()!);
                    }
                }
            });

            const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);

            if (!stub) {
                return;
            }

            if (component instanceof Block) {
                stub.replaceWith(component.getContent()!);
            }
        });

        return fragment.content;
    }

    private _render() {
        const fragment = this.render();

        this._removeEvents();

        this._element!.innerHTML = '';

        this._element!.append(fragment);

        this._addEvents();
    }

    protected render(): DocumentFragment {
        const template = '' as any;
        return this.compile(template, this.props);
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: Props<P>) {
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop as string];
                return (typeof value === 'function') ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldTarget = { ...target };
                target[prop as keyof Props<P>] = value;

                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _createDocumentElement(tagName: string) {
        const element = document.createElement(tagName);
        element.setAttribute('data-id', this.id);
        return element;
    }

    show() {
        this.getContent()!.style.display = 'flex';
    }

    hide() {
        this.getContent()!.style.display = 'none';
    }
}

export default Block;
