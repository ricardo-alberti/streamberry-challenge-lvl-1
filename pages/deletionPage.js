const setHeader = require('../components/header');

const { DELETE_MOVIE } = require('../mutations');
const chooseAction = require('../components/chooseAction');

function deletionPage(props){
    setHeader()

    async function deleteMovie(userInput){
        const result = await props.client.mutate({
            mutation: DELETE_MOVIE,
            variables: {
                deleteMovieId: userInput
            }   
        });

        if (result.data.deleteMovie === true){
            console.log('\n "Filme deletado com sucesso" \n')
        } else {
            console.log('\n "Erro ao deletar. Verifique se o id está correto" \n')
        }
        
        chooseAction({ pageName: 'delete', action: deleteMovie, changePage: props.changePage })
    }

    chooseAction({ pageName: 'delete', action: deleteMovie, changePage: props.changePage })
}

module.exports = deletionPage
