const mongoose = require('mongoose')

const DB_HOST = 'mongodb://127.0.0.1:27017'

const database = {
    connect: () => {
        mongoose.connect(DB_HOST)
    },
    close: () => {
        mongoose.close()
    }
};

module.exports = database
