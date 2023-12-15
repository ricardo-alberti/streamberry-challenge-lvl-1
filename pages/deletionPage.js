const setHeader = require('../components/header');
const getUserInput = require('../components/userInput');
const { DELETE_MOVIE } = require('../mutations');

function deletionPage(props){
    setHeader()

    async function getInput(){
        const userInput = await getUserInput('delete');
        deleteMovie(userInput)
    }

    async function chooseAction(){
        console.log(' Deletar filme \n')
        const userInput = await getUserInput('chooseAction');

        if (userInput === 1){
            setHeader()
            getInput()
        }

        else if (userInput === 2){
            props.changePage(0)
        }

        else { 
            setHeader()
            chooseAction() 
        }
    }

    async function deleteMovie(userInput){
        const result = await props.client.mutate({
            mutation: DELETE_MOVIE,
            variables: {
                deleteMovieId: userInput
            }   
        });

        if (result.data.deleteMovie === true){
            console.log('\n "Filme deletado com sucesso" \n')
            chooseAction()
        } else {
            console.log('\n "Erro ao deletar. Verifique se o id está correto" \n')
            chooseAction()
        }
    }

    chooseAction()
}

module.exports = deletionPage
