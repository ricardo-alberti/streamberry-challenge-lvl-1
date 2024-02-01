const setHeader = require('../components/header');
const { UPDATE_MOVIE } = require('../mutations');

const chooseAction = require('../components/chooseAction');

function updatePage(props){
    setHeader()

    async function updateMovie(userInput){
        const result = await props.client.mutate({
            mutation: UPDATE_MOVIE,
            variables: { 
                updateMovieId: userInput.id,
                title: userInput.title,
                genre: userInput.genre,
                year: userInput.year,
                rating: userInput.rating
            }
        })
        
        const movie = result?.data?.updateMovie

        if (!movie) {
            console.log(' "Erro: filme não encontrado" \n')
        }

        if (movie){
            console.log('\n Filme atualizado: ')
            console.log(`\n     -> Id: ${movie.id}\n        Título: ${movie.title} \n        Gênero: ${movie.genre} \n        Year: ${movie.year} \n        Rating: ${movie.rating} \n`)
        }

        chooseAction({ pageName: 'update', action: updateMovie, changePage: props.changePage })
    }

    chooseAction({ pageName: 'update', action: updateMovie, changePage: props.changePage })
}

module.exports = updatePage
