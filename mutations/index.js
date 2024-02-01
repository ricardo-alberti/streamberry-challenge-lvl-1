const { gql } = require('@apollo/client');

const CREATE_MOVIE = gql`
    mutation CreateMovie($title: String!, $genre: String!, $year: String!, $rating: Int!) {
        createMovie(title: $title, genre: $genre, year: $year, rating: $rating) {
            id
            title
            genre
            year
            rating
        }
    }
`;

const UPDATE_MOVIE = gql`
    mutation UpdateMovie($updateMovieId: ID!, $title: String!, $genre: String!, $year: String!, $rating: Int!) {
        updateMovie(id: $updateMovieId, title: $title, genre: $genre, year: $year, rating: $rating) {
            genre
            id
            rating
            title
            year
        }
    }    
`;

const DELETE_MOVIE = gql`
    mutation DeleteMovie($deleteMovieId: ID!) {
        deleteMovie(id: $deleteMovieId)
    }
`;

module.exports = { CREATE_MOVIE, UPDATE_MOVIE, DELETE_MOVIE }
