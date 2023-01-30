import { describe, it } from 'mocha';
import proxyquire from 'proxyquire';
import { expect } from 'chai';
import sinon from 'sinon';
import BlockType from './Block';

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
};

const { default: Block } = proxyquire('./Block', {
    '../EventBus/EventBus': {
        EventBus: class {
            emit = eventBusMock.emit;
            on = eventBusMock.on;
        }
    }
}) as { default: typeof BlockType };

describe('Block', () => {
    class ComponentMock extends Block {
        constructor(props: any) {
            super('div', '', props);
        }
    }

    it('should HTMLDivElement', () => {
        const component = new ComponentMock({});
        const el : HTMLElement = component.element as HTMLElement;
        expect(el).to.be.an('HTMLDivElement');
    });
});
