export interface Action {
    type: string;
}

export interface ActionWith<TPayload = any> extends Action {
    payload: TPayload;
}

interface ReducerMethods<TState, TPayload = any> {
    [actionType: string]: (state: TState, payload?: TPayload) => TState;
}

function newReducer<TState>(
    initialState: TState,
    reducerMethods: ReducerMethods<TState>,
): (state: TState, action: ActionWith) => TState {
    return function reducerFunction(
        state: TState = initialState,
        action: ActionWith = { type: '', payload: null },
    ): TState {
        if (action.type in reducerMethods) {
            return reducerMethods[action.type](state, action.payload);
        }
        return state;
    };
}

function newAction(type: string): Action;
function newAction<T>(type: string, payload: T): ActionWith<T>;
function newAction(type: any, payload?: any): any {
    if (payload) {
        const result: ActionWith<any> = {
            type,
            payload,
        };
        return result;
    } else {
        return {
            type,
        } as Action;
    }
}

function newActionType(prefix: string, type: string): string {
    return `@${prefix}/${type}`;
}

export { newReducer, newAction, newActionType };
