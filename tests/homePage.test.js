const homePage = require('../pages/homePage')
const setHeader = require('../components/header');
const chooseAction = require('../components/chooseAction');

let consoleOutput = [];

const originalConsoleLog = console.log;

console.log = jest.fn((...args) => {
    consoleOutput.push(args.join(' '));
});

jest.mock('../components/chooseAction');
jest.mock('../components/header');

test('tests homePage interface', () => {
    function changePage(){
        console.log('chooseAction component')
    }

    homePage(changePage);

    expect(setHeader).toHaveBeenCalled();

    expect(consoleOutput)

    .toEqual([
    ' Digite o número da opção desejada:',
    '     1. Cadastrar',
    '     2. Listar',
    '     3. Atualizar',
    '     4. Deletar',
    '     5. Pesquisar \n',
])

    expect(chooseAction).toHaveBeenCalledWith({ pageName: 'home', changePage: changePage });

    console.log = originalConsoleLog;
})
