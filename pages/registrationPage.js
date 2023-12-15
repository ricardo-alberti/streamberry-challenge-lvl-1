const setHeader = require('../components/header')
const getUserInput = require('../components/userInput');
const { CREATE_MOVIE } = require('../mutations');

function registrationPage(props) {
    setHeader()

    async function getInput() {
        const userInput = await getUserInput('register');

        const year = /\b(?:19[2-9]\d|20[0-1]\d|202[0-4])\b/

        if (year.test(userInput.year) === false) {
            console.log('\n Erro: "Ano inserido inválido" \n')
        }

        if (isNaN(userInput.rating) === true){
            console.log(' Erro: "Avaliação deve ser um numeral" \n')
        }

        if (isNaN(userInput.rating) === false && year.test(userInput.year) === true) {
            registerMovie(userInput)
        } 

        chooseAction()
    }

    async function chooseAction() {
        console.log(' Cadastar filme? \n')
        const userInput = await getUserInput('chooseAction');

        if (userInput === 1) {
            setHeader()
            getInput()
        }

        else if (userInput === 2) {
            props.changePage(0)
        }

        else {
            setHeader()
            chooseAction()
        }
    }

    async function registerMovie(userInput) {
        const result = await props.client.mutate({
            mutation: CREATE_MOVIE,
            variables: {
                title: userInput.title,
                genre: userInput.genre,
                year: userInput.year,
                rating: userInput.rating
            }
        })

        const movie = result?.data?.createMovie

        if (movie) {
            console.log(`\n-> Id: ${movie.id}\n   Título: ${movie.title} \n   Gênero: ${movie.genre} \n   Year: ${movie.year} \n   Rating: ${movie.rating} \n`)
        }

        else {
            console.log(' " Erro ao cadastrar filme" \n')
        }

    }

    chooseAction()
}

module.exports = registrationPage
