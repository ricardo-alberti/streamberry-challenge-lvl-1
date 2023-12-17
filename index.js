const { ApolloClient, InMemoryCache } = require('@apollo/client')

const uri = 'https://streamberry-challenge-lvl-1.vercel.app/api'
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri, 
    cache
});

//navigator
function changePage(pageNumber){
    const { listPage, homePage, updatePage, deletionPage, searchPage, registrationPage } = require('./pages')
    if (pageNumber === 0) { homePage(changePage) }
    if (pageNumber === 1){ registrationPage({client, changePage}) }
    else if (pageNumber === 2){ listPage({client, changePage}) }
    else if (pageNumber === 3){ updatePage({client, changePage}) }
    else if (pageNumber === 4){ deletionPage({client, changePage}) }
    else if (pageNumber === 5){ searchPage({client, changePage}) }
}

const { homePage } = require('./pages')

//default page
homePage(changePage)
