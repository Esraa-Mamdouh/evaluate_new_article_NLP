import {checkURL} from '../js/checkUrl'

test('Testing the checkURL() function', () => {
    expect(checkURL).toBeDefined();
  });

test('checkURL() return false for an invalid url', () => {
    expect(checkURL(' ')).toBeFalsy()
})

test('checkURL() return false for an invalid url', () => {
    expect(checkURL('x')).toBeFalsy()
})

test('checkURL() return true for a valid url', () => {
    expect(checkURL('https://www.nature.com/articles/d41586-021-02695-0')).toBeTruthy()
})

