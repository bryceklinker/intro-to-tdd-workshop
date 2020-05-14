import {calculate} from "./string-calculator";

test('when numbers is "" then returns 0', () => {
    const result = calculate('');

    expect(result).toEqual(0);
})
