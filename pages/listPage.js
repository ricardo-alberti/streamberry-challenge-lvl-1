const getUserInput = require('../components/userInput');
const setHeader = require('../components/header');

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
                console.log(`${movies.indexOf(movie) + 1}. Id: ${movie.id}\n   Título: ${movie.title} \n   Gênero: ${movie.genre} \n   Year: ${movie.year} \n   Rating: ${movie.rating} \n`)
            })

            chooseAction()

        } catch (error) {
            console.error(' "Erro ao carregar lista de filmes" \n');
            chooseAction()
        }
    }

    async function chooseAction(){
        console.log(' Listar filmes cadastrados? \n')
        const userInput = await getUserInput('chooseAction');

        if (userInput === 1){
            setHeader()
            getMovies()
        }

        else if (userInput === 2){
            props.changePage(0)
        }

        else { 
            setHeader()
            chooseAction() 
        }
    }


    chooseAction()
}

module.exports = listPage
