import throttle from 'lodash/throttle';
import { createStore, Reducer, Store, StoreEnhancer } from 'redux';
import { ActionWith } from '..';

export interface LocalStorageOptions {
    key?: string;
    filter?: (state: any) => any;
    delay?: number;
    version?: string | number;
}

interface StoreData {
    version?: string | number;
    value: any;
}

function loadState(key: string, version: string | number): any {
    try {
        const stringValue = localStorage.getItem(key);
        if (typeof stringValue === 'string') {
            const data: StoreData = JSON.parse(stringValue);
            if (data && data.version === `${version}`) {
                return data.value;
            }
        }
    } catch (err) {}
    return undefined;
}

export function createLocalStorageStore<TReduxState = any>(
    options: LocalStorageOptions,
    reducer: Reducer<TReduxState, ActionWith>,
    enhancer?: StoreEnhancer,
): Store<TReduxState, ActionWith> {
    if (!localStorage) {
        throw new Error('createLocalStorageStore: localStorage is undefined');
    }

    const { key = 'redux-local', filter = (x) => x, delay = 1000, version = 1 } = options || {};

    const initialData = loadState(key, version);

    const store = createStore(reducer, initialData, enhancer);

    store.subscribe(
        throttle(() => {
            const s = filter(store.getState());
            const data: StoreData = {
                version: `${version}`,
                value: s,
            };
            localStorage.setItem(key, JSON.stringify(data));
        }, delay),
    );

    return store;
}
