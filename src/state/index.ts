function createAccessorChainFiller(accessorChain: string[]): any {
    const fillerProxy = new Proxy(
        {},
        {
            get: (node: any, name: string): any => {
                accessorChain.push(name);
                return fillerProxy;
            },
        },
    );
    return fillerProxy;
}

function getAccessorChain<TState = any, TValue = any>(accessor: (s: TState) => TValue): string[] {
    const accessorChain: string[] = [];
    const accessorChainFiller = createAccessorChainFiller(accessorChain);
    accessor(accessorChainFiller);
    return accessorChain;
}

function innerSet<TState = any, TValue = any>(state: TState, accessor: (s: TState) => TValue, value: TValue): TState {
    const chain = getAccessorChain(accessor);

    const newState: { [key: string]: any } = { ...state };
    let node = newState;
    if (chain.length === 1) {
        node[chain[0]] = value;
    } else if (chain.length > 1) {
        for (let i = 0; i < chain.length; i++) {
            const chainName = chain[i];
            if (i === chain.length - 1) {
                node[chainName] = value;
            } else {
                node = node[chainName];
            }
        }
    }

    return newState as any;
}

export function setState<TState = any, TValue = any>(
    state: TState,
    accessor: (s: TState) => TValue,
    value: TValue,
): TState;
export function setState<TState = any>(state: TState, ...sets: [(s: TState) => any, any][]): TState;
export function setState<TState = any>(state: TState, ...args: any[]): TState {
    if (typeof args[0] === 'function') {
        return innerSet(state, args[0], args[1]);
    } else if (Array.isArray(args[0])) {
        let s = state;
        for (let i = 0; i < args.length; i++) {
            const item = args[i];
            s = innerSet(s, item[0], item[1]);
        }
        return s;
    } else {
        return state;
    }
}
