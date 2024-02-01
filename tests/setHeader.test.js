const setHeader = require('../components/header');

test('tests if setHeader prints header', () => {
    expect(setHeader()).toBe(
        console.clear(),
        console.log('==== Streamberry ==== \n')
    )
});

