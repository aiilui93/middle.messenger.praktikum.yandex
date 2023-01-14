import EventBus from '../EventBus/EventBus';
import set from '../helpers/set';

export enum StoreEvents {
    Updated = 'updated'
}

export class Store extends EventBus< { [Ev: string]: unknown[] }> {
    private state: any = {};

    public set(keypath: string, data: unknown) {
        set(this.state, keypath, data);

        this.emit(StoreEvents.Updated, this.getState());
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();

export default store;
