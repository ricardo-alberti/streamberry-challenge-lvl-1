const setHeader = require('../components/header')
const getUserInput = require('../components/userInput');
const { UPDATE_MOVIE } = require('../mutations');

function updatePage(props){
    setHeader()

    async function getInput(){
        const userInput = await getUserInput('update');

        if (isNaN(userInput.rating) === false){
            updateMovie(userInput)
        } else {
            setHeader()
            console.log('" Avaliação deve ser um numeral" \n')
        }

        const year = /\b(?:19[2-9]\d|20[0-1]\d|202[0-4])\b/

        if (year.test(userInput.year) === false){
            console.log(' "Ano inserido inválido" \n')
        }

        chooseAction()
    }

    async function chooseAction(){
        console.log(' Atualizar filme? \n')
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
            console.log(`\n-> Id: ${movie.id}\n   Título: ${movie.title} \n   Gênero: ${movie.genre} \n   Year: ${movie.year} \n   Rating: ${movie.rating} \n`)
        }

    }

    chooseAction()
}

module.exports = updatePage
