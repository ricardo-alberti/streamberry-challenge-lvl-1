const { gql } = require('@apollo/client');

const GET_MOVIES = gql`
    query Query {
        movies {
            id
            rating
            title
            year
            genre
        }
    }
`;

const GET_MOVIE = gql`
    query Movie($title: String!) {
        movie(title: $title) {
            genre
            id
            rating
            title
            year
        }
    }
`;

module.exports = { GET_MOVIES, GET_MOVIE };

