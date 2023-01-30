import { expect } from 'chai';
import {
    after, beforeEach, describe, it
} from 'mocha';
import Sinon from 'sinon';
import Router from './Router';
import { Routes } from '../types/dataTypes';
import Block from '../Block/Block';

describe('Router', () => {
    const originalForward = window.history.forward;
    const originalBack = window.history.back;

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
        window.history.forward = Sinon.fake();
        window.history.back = Sinon.fake();
    });

    after(() => {
        window.history.forward = originalForward;
        window.history.back = originalBack;
    });

    it('go - window history length changed', () => {
        const historyLength = window.history.length;
        Router.go(Routes.Login);
        const newLength = historyLength + 1;

        expect(window.history.length).to.eq(newLength);
    });

    it('forward', () => {
        Router.forward();

        expect((window.history.forward as any).callCount).to.eq(1);
    });

    it('back', () => {
        Router.back();

        expect((window.history.back as any).callCount).to.eq(1);
    });
});
