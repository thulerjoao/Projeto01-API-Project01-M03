const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/paletas/find-paletas', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/find-paletas/:id', (req, res) => {
  const id = req.params.id;
  const FindPaleta = paletas.find((paletas) => paletas.id == id);
  res.send(FindPaleta);
});

//Dados que seriam guardados em um DB
const jordans = [
  {
    id: 1,
    modelo: 'Jordan 1 High Rebellionaire 35',
    descricao:
      'O modelo, super exclusivo, nas cores preto, cinza e branco lembra o clássico Air Jordan 1 "Shadow"',
    foto: './Frontend/assets/img/jordan_01.jpg',
    preco: 2800.9,
  },
  {
    id: 2,
    modelo: 'Air Jordan 1 Mid "Shattered Backboard"',
    descricao:
      'Esse é o Air Jordan 1 Mid, na colorway "Shattered backboard" que tem esse nome em referência ao episódio em que Michael Jordan quebrou o vidro da cesta ao fazer uma enterrada em 1985',
    foto: './Frontend/assets/img/jordan_02.jpg',
    preco: 1800.0,
  },
  {
    id: 3,
    modelo: 'Air Jordan 1 Mid Special Edition "Multicolor"',
    descricao:
      'Este Air Jordan 1 Mid combina o melhor dos 2 mundos: discreto e irreverente',
    foto: './Frontend/assets/img/jordan_03.jpg',
    preco: 1999.9,
  },
  {
    id: 4,
    modelo: 'Air Jordan 1 Mid "White Gold Black"',
    descricao:
      'Nunca viu esse modelo no Brasil? Te explicamos! O Jordan 1 Mid "White Gold Black" é um modelo de muito sucesso lançado somente nos Estados Unidos e Europa',
    foto: './Frontend/assets/img/jordan_04.jpg',
    preco: 1890.0,
  },
];

// Listen port
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
