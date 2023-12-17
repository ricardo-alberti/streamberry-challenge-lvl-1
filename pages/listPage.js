const setHeader = require('../components/header');
const chooseAction = require('../components/chooseAction');

const { GET_MOVIES } = require('../queries');

function listPage(props){
    setHeader()

    async function getMovies() {
        try {
            const result = await props.client.query({
                query: GET_MOVIES,
            });

            const movies = result.data.movies

            movies.map(movie => {
                console.log(`     ${movies.indexOf(movie) + 1}. Id: ${movie.id}\n        Título: ${movie.title} \n        Gênero: ${movie.genre} \n        Year: ${movie.year} \n        Rating: ${movie.rating} \n`)
            })

        } catch (error) {
            console.error(' "Erro ao carregar lista de filmes" \n');
        }

        chooseAction({ pageName: 'list', action: getMovies, changePage: props.changePage })
    }

    chooseAction({ pageName: 'list', action: getMovies, changePage: props.changePage })
}

module.exports = listPage
