const setHeader = require('../components/header')
const getUserInput = require('../components/userInput')

function homePage(changePage){
    setHeader()

    console.log(' Digite o número da opção desejada:')

    console.log('     1. Cadastrar')
    console.log('     2. Listar')
    console.log('     3. Atualizar')
    console.log('     4. Deletar')
    console.log('     5. Pesquisar \n')

    async function getInput(){
        const userInput = await getUserInput();
        changePage(userInput)
    }

    getInput()
}


module.exports = homePage
