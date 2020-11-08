export interface Action {
    type: string;
}

export interface ActionWith<TPayload = any> extends Action {
    payload: TPayload;
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

export { newAction };
