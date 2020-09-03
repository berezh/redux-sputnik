import { newActionType } from '..';

test('newActionType', () => {
    expect(newActionType('prefix', 'type')).toBe('@prefix/type');
});
