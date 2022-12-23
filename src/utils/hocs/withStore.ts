import isEqual from '../helpers/isEqual';
import store, { StoreEvents } from '../Store/Store';
import { Props } from '../types/dataTypes';

export default function withStore(mapStateToProps: (state: any) => any) {
    return function wrap(Component: any) {
        let currentState: any = null;

        return class WithStore extends Component {
            constructor(props: Props<Record<string, unknown>>) {
                const state = store.getState();
                currentState = mapStateToProps(state);

                super({ ...props, ...currentState });

                store.on(StoreEvents.Updated, () => {
                    const state = store.getState();
                    const propsFromState = mapStateToProps(state);

                    if (isEqual(currentState, propsFromState)) {
                        return;
                    }

                    this.setProps({ ...propsFromState });
                });
            }
        };
    };
}
