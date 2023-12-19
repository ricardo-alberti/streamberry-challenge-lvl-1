const chooseAction = require('../components/chooseAction');
const setHeader = require('../components/header')
const { GET_MOVIE } = require('../queries');

function searchPage(props){
    setHeader()

    async function searchMovie(userInput){
        const result = await props.client.query({
            query: GET_MOVIE,
            variables: {
                title: userInput
            }
        })

        const movie = result?.data?.movie

        if (!movie){
            console.log('\n "Filme não encontrado" \n')
        }

        if (movie){
            console.log('\n Filme encontrado: ')
            console.log(`\n     -> Id: ${movie.id}\n        Título: ${movie.title} \n        Gênero: ${movie.genre} \n        Ano: ${movie.year} \n        Avaliação: ${movie.rating} \n`)
        }

        chooseAction({ pageName: 'search', action: searchMovie, changePage: props.changePage })
    }

    chooseAction({ pageName: 'search', action: searchMovie, changePage: props.changePage })
}

module.exports = searchPage
