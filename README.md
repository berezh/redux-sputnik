# redux-sputnik

Utils for redux

## Installation

```
npm install react-string-format
```

## newAction

Creates an action

```jsx
import { newAction } from 'redux-sputnik';

export const CommonActions = {
    doRequest: (param: string) => newAction(CommonActionTypes.DO_REQUEST, param),
}

```

## newActionType

Creates action type identifier

```jsx
import { newActionType } from 'redux-sputnik';

const prefix = 'common';

export const CommonTypes = {
    DO_REQUEST: newActionType(prefix, 'DO_REQUEST')
}

```

## newReducer

Creates reducer

```jsx
import { newReducer } from 'redux-sputnik';

const COMMON_INITIAL_STATE = {};

export const commonReducer = newReducer(AUTH_INITIAL_STATE, {
    [CommonTypes.DO_REQUEST]: (state, params: string) => {
        return {...state, params};
    }
});

```
