const chooseAction = require('../components/chooseAction')
const setHeader = require('../components/header')

function homePage(changePage){
    setHeader()

    console.log(' Digite o número da opção desejada:')
    console.log('     1. Cadastrar')
    console.log('     2. Listar')
    console.log('     3. Atualizar')
    console.log('     4. Deletar')
    console.log('     5. Pesquisar \n')

    chooseAction({ pageName: 'home', changePage: changePage })
}


module.exports = homePage
