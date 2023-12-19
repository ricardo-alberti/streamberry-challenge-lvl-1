const setHeader = require('../components/header');
const chooseAction = require('../components/chooseAction');

const { GET_MOVIES } = require('../queries');

function listPage(props){
    setHeader()

    async function getMovies(moviesStart, moviesEnd) {
        try {
            const result = await props.client.query({
                query: GET_MOVIES,
                fetchPolicy: 'no-cache'
            });

            const movies = result.data.movies.slice(moviesStart, moviesEnd)

            movies.map(movie => {
                console.log(`     ${movies.indexOf(movie) + 1 + moviesStart}. Id: ${movie.id}\n        Título: ${movie.title} \n        Gênero: ${movie.genre} \n        Ano: ${movie.year} \n        Avaliação: ${movie.rating} \n`)
            })

            chooseAction({ pageName: 'list', action: getMovies, changePage: props.changePage, resultLength: result.data.movies.length })

        } catch (error) {
            console.error(' "Erro ao carregar lista de filmes" \n');

            chooseAction({ pageName: 'list', action: getMovies, changePage: props.changePage, resultLegnth: result.data.movies.length })
        }

    }

    chooseAction({ pageName: 'list', action: getMovies, changePage: props.changePage })
}

module.exports = listPage
