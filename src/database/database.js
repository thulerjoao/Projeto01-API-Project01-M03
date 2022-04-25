const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/jordans-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb Atlas Connected!'))
    .catch((error) => console.log(`Erro connecting${error}`));
};

module.exports = connectToDatabase;
