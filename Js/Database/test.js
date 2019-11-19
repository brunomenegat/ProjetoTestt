const mongoose = require('../Database');

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });//criadnoconexão e define mongoclient 
mongoose.Promise = global.Promise;

module.exports = mongoose;