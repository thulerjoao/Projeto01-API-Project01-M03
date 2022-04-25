require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/jordan.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/jordans', routes);

// Listen port
app.listen(port, () => {
  console.log(`Servidor rodando em na porta ${port}`);
});
