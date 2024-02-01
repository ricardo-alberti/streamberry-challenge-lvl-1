const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(pageName) {
    if (pageName === 'chooseAction') {
        return new Promise((resolve) => {
            readline.question('     1. Confirmar \n     2. Voltar para tela inicial \n\n', (choiceInput) => {
                resolve(parseInt(choiceInput))
            })
        })
    }

    if (pageName === 'delete') {
        return new Promise((resolve) => {
            readline.question('     Id do filme: ', (idInput) => {
                resolve(idInput)
            })
        })
    }

    if (pageName === 'search') {
        return new Promise((resolve) => {
            readline.question('     Título do filme: ', (titleInput) => {
                resolve(titleInput)
            })
        })
    }

    if (pageName === 'register') {
        return new Promise((resolve) => {
            readline.question('     Título do filme: ', (titleInput) => {
                readline.question('     Gênero do filme: ', (genreInput) => {
                    readline.question('     Ano do filme: ', (yearInput) => {
                        readline.question('     Avaliação do filme: ', (ratingInput) => {
                            resolve({title: titleInput, genre: genreInput, year: yearInput, rating: parseInt(ratingInput)});
                        });
                    });
                });
            });
        });
    }

    if (pageName === 'update') {
        return new Promise((resolve) => {
            readline.question('     Id do filme: ', (idInput) => {
                readline.question('     Título do filme: ', (titleInput) => {
                    readline.question('     Gênero do filme: ', (genreInput) => {
                        readline.question('     Ano do filme: ', (yearInput) => {
                            readline.question('     Avaliação do filme: ', (ratingInput) => {
                                resolve({id: idInput, title: titleInput, genre: genreInput, year: yearInput, rating: parseInt(ratingInput)}) ;
                            });
                        });
                    });
                });
            });
        });
    }

    if (pageName === 'home') { 
        return new Promise((resolve) => {
            readline.question('', (input) => {
                resolve(parseInt(input));
            });
        });
    }
}


module.exports = getUserInput;

