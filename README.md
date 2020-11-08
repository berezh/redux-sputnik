# redux-sputnik

Utils for redux

<a href="https://www.npmjs.com/package/redux-sputnik">
    <img src="https://nodei.co/npm/redux-sputnik.png?mini=true">
</a>

### Installation

```
npm install redux-sputnik
```

## newAction

Creates an action

```jsx
import { newAction } from 'redux-sputnik';

export const CommonActions = {
    myAction: (param: string) => newAction(CommonActionTypes.MY_ACTION, param),
}

```

## newActionType

Creates action type identifier

```jsx
import { newActionType } from 'redux-sputnik';

const prefix = 'common';

export const CommonTypes = {
    MY_ACTION: newActionType(prefix, 'MY_ACTION')
}

```

## newReducer

Creates reducer

```jsx
import { newReducersetState } from 'redux-sputnik';

const COMMON_INITIAL_STATE = {};

export const commonReducer = newReducer(AUTH_INITIAL_STATE, {
    [CommonTypes.MY_ACTION]: (state, params: string) => {
        return setState(state, _ => _.value, params};
    }
});

```

## setState

Changes redux state

```jsx
import { newReducer, setState } from 'redux-sputnik';

const COMMON_INITIAL_STATE = {};

export const commonReducer = newReducer(AUTH_INITIAL_STATE, {
    [CommonTypes.MY_ACTION]: (state, params: string) => {
        return setState(state, _ => _.value, params};
    }
});

```
