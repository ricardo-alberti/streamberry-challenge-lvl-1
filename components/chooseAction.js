const setHeader = require('./header');
const getUserInput = require('./userInput');

async function chooseAction(props){
    let pageName = props?.pageName;
    let action = props?.action;

    async function resolveInput(){
        if (pageName === 'list'){
            console.log(' Lista de Filmes: \n')
            action()
        } 
        
        if (pageName === 'search'  || pageName === 'delete'){
            const userInput = await getUserInput(pageName);
            action(userInput)
        }

        if (pageName === 'register' || pageName === 'update'){
            const userInput = await getUserInput(pageName);

            const year = /\b(?:19[2-9]\d|20[0-1]\d|202[0-4])\b/

            if (year.test(userInput.year) === false || isNaN(userInput.rating) === true){
                console.log('\n Erro: "Entrada inválida. Verifique se o ano está entre 1930-2024 e se a avaliação é um numeral" \n')
                chooseAction(props)
            }

            if (isNaN(userInput.rating) === false && year.test(userInput.year) === true) {
                action(userInput)
            } 
        }
    }

    if (pageName === 'update') { console.log(' Atualizar filme? \n') }
    if (pageName === 'search') { console.log(' Pesquisar filme? \n') }
    if (pageName === 'register') { console.log(' Cadastar filme? \n') }
    if (pageName === 'list') { console.log(' Listar filmes cadastrados? \n') }
    if (pageName === 'delete') { console.log(' Deletar filme \n') }

    if (pageName === 'home'){
        const userInput = await getUserInput('home');
        props.changePage(userInput)
    } 

    if (pageName !== 'home'){

        const userInput = await getUserInput('chooseAction');

        if (userInput === 1){
            setHeader()
            resolveInput()
        }

        else if (userInput === 2){
            props.changePage(0)
        }

        else { 
            setHeader()
            chooseAction(props) 
        }
    }
}

module.exports = chooseAction
