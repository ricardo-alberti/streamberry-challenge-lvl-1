const setHeader = require('../components/header')
const getUserInput = require('../components/userInput');
const { GET_MOVIE } = require('../queries');

function searchPage(props){
    setHeader()

    async function getInput(){
        const userInput = await getUserInput('search');
        searchMovie(userInput)
    }

    async function chooseAction(){
        console.log(' Pesquisar filme? \n')
        const userInput = await getUserInput('chooseAction');

        if (userInput === 1){
            setHeader()
            getInput()
        }

        else if (userInput === 2){
            props.changePage(0)
        }

        else { chooseAction() }
    }

    async function searchMovie(userInput){
        const result = await props.client.query({
            query: GET_MOVIE,
            variables: {
                title: userInput
            }
        })

        const movie = result?.data?.movie

        if (!movie){
            console.log(' Filme não encontrado \n')
        }

        if (movie){
            console.log(`\n-> Id: ${movie.id}\n   Título: ${movie.title} \n   Gênero: ${movie.genre} \n   Year: ${movie.year} \n   Rating: ${movie.rating} \n`)
        }

        chooseAction()
    }

    chooseAction()
}

module.exports = searchPage
