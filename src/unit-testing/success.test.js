import { sample, fetch } from '../funcs/fetch';

jest.mock('../funcs/fetch');

test('should fetch users', () => {
    fetch('success').then(result => {
        expect(result).toEqual(sample)
    })
});