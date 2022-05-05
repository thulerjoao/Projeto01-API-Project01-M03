const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb Atlas Connected!'))
    .catch((error) => console.log(`Erro connecting ${error}`));
};

module.exports = connectToDatabase;
