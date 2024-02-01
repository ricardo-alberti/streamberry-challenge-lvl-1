const { ApolloClient, InMemoryCache } = require('@apollo/client')

const uri = 'http://localhost:4000/api'
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri,
    cache
});

//navigator
function changePage(pageNumber) {
    const { listPage, homePage, updatePage, deletionPage, searchPage, registrationPage } = require('./pages')
    if (pageNumber === 0) { homePage(changePage); return }
    if (pageNumber === 1) { registrationPage({ client, changePage }); return }
    if (pageNumber === 2) { listPage({ client, changePage }); return }
    if (pageNumber === 3) { updatePage({ client, changePage }); return }
    if (pageNumber === 4) { deletionPage({ client, changePage }); return }
    if (pageNumber === 5) { searchPage({ client, changePage }); return }

    homePage(changePage)
}

const { homePage } = require('./pages')

//default page
homePage(changePage)
