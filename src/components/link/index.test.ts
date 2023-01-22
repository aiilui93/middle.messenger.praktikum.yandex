import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import Link from '.';
import Block from '../../utils/Block/Block';
import Router from '../../utils/Router/Router';
import { Routes } from '../../utils/types/dataTypes';

describe('Link', () => {
    it('should render element', () => {
        new Link({
            anchor: 'Click me',
            href: '/asd',
        });
    });

    class ComponentMock extends Block {
        constructor(props: any) {
            super('div', '', props);
        }
        render() {
            return new DocumentFragment();
        }
    }

    beforeEach(() => {
        Router.reset();
        Router.use(Routes.Login, new ComponentMock({}));
    });

    it('should go to passed route on click', () => {
        const url = Routes.Login;
        const link = new Link({ anchor: 'Click me', href: url });
        const spy = sinon.spy(Router, 'go');
        const element = link.element as HTMLElement;

        element.click();

        expect(spy.calledWith(url)).to.eq(true);
    });
});
