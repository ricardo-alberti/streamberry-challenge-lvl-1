const chooseAction = require('../components/chooseAction');

test('chooseAction resolves action based on pageName', async () => {
    function action(){
        console.log('action runned')
    }

    expect(await chooseAction({pageName: 'list', action: action }))

    .toBe(
        console.log(' Lista de Filmes: \n'),
        console.log('action runned')
    )
})
