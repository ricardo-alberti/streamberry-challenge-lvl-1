const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const cors = require('cors')

const models = require('./models')
const database = require('./database')
database.connect()

const typeDefs = gql`
    type Movie {
        id: ID!
        title: String!
        genre: String
        year: String!
        rating: Int!
    }

    type Query {
        movies: [Movie]
        movie(title: String!): Movie
    }

    type Mutation {
        createMovie(title: String!, genre: String!, year: String!, rating: Int!): Movie
        deleteMovie(id: ID!): Boolean!
        updateMovie(id: ID!, title: String!, genre: String!, year: String!, rating: Int!): Movie
    }
`;

const resolvers = {
    Query: {
        movies: async () => {
            return await models.Movie.find({})
        },
        movie: async (parent, args) => {
            return await models.Movie.findOne({ title: args.title })
        }
    }, 
    Mutation: {
        createMovie: async (parent, args) => {
            try {
                return await models.Movie.create({
                    title: args.title,
                    genre: args.genre,
                    year: args.year,
                    rating: args.rating
                })
            } catch {
                return null
            }
        },
        deleteMovie: async (parent, args) => {
            try {
                await models.Movie.findByIdAndDelete({ _id: args.id })
                return true
            } catch {
                return false
            }
        },
        updateMovie: async (parent, args) => {
            try {
            const movie = await models.Movie.findByIdAndUpdate(
                args.id, 
                {
                    $set: {
                        title: args.title,
                        genre: args.genre,
                        year: args.year,
                        rating: args.rating
                    }
                },
                {
                    new: true
                }
            )

                return movie
            } catch {
                return null
            }
        }
    }
}

const app = express()

app.use(cors())

async function startApolloServer(){
    const server = new ApolloServer({typeDefs, resolvers})
    const playground = await server.start().then(() => server.applyMiddleware({app, path: '/api' }))
}

startApolloServer()

app.listen({ port: 4000 }, () => console.log('listening port 4000'))

