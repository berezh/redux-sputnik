import { ActionWith } from "../action";

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

export { newReducer };
