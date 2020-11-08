import { setState } from '../state';

const initialState = {
    stringValue: '',
    numberValue: 0,
    level1: {
        number: 0,
    },
};

test('setState', () => {
    expect(setState(initialState, x => x.stringValue, 'hello')).toMatchObject({
        ...initialState,
        stringValue: 'hello',
    });

    expect(setState(initialState, x => x.level1.number, 2)).toMatchObject({
        ...initialState,
        level1: {
            number: 2,
        },
    });
});

test('setState: array', () => {
    expect(setState(initialState, [x => x.stringValue, 'hello'], [x => x.numberValue, 1])).toMatchObject({
        ...initialState,
        stringValue: 'hello',
        numberValue: 1,
    });
});
