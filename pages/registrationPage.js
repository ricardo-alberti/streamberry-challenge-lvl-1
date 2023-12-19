const setHeader = require('../components/header')

const { CREATE_MOVIE } = require('../mutations');
const chooseAction = require('../components/chooseAction');

function registrationPage(props) {
    setHeader()

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
            console.log('\n Filme Cadastrado: ')
            console.log(`\n     -> Id: ${movie.id}\n        Título: ${movie.title} \n        Gênero: ${movie.genre} \n        Ano: ${movie.year} \n        Avaliação: ${movie.rating} \n`)
        }

        else {
            console.log(' " Erro ao cadastrar filme" \n')
        }

        chooseAction({ pageName: 'register', action: registerMovie, changePage: props.changePage })
    }

    chooseAction({ pageName: 'register', action: registerMovie, changePage: props.changePage })
}

module.exports = registrationPage
