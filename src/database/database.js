const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://root:admin@api-jordanstore.pupwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,    
    })
    .then(() => console.log('MongoDb Atlas Connected!'))
    .catch((error) => console.log(`Erro connecting${error}`));
};

module.exports = connectToDatabase;
