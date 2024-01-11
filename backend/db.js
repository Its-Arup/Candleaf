const mongoose = require('mongoose');

const serverConnection = mongoose.connect()

module.exports = {
    serverConnection
}