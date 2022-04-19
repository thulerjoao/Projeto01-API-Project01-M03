const jordans = [
  {
    id: 1,
    modelo: 'Jordan 1 High Rebellionaire 35',
    descricao:
      'O modelo, super exclusivo, nas cores preto, cinza e branco lembra o clássico Air Jordan 1 "Shadow"',
    foto: './assets/img/jordan_01.jpg',
    preco: 2800,
  },
  {
    id: 2,
    modelo: 'Air Jordan 1 Mid "Shattered Backboard"',
    descricao:
      'Esse é o Air Jordan 1 Mid, na colorway "Shattered backboard" que tem esse nome em referência ao episódio em que Michael Jordan quebrou o vidro da cesta ao fazer uma enterrada em 1985',
    foto: './assets/img/jordan_02.jpg',
    preco: 1800,
  },
  {
    id: 3,
    modelo: 'Air Jordan 1 Mid Special Edition "Multicolor"',
    descricao:
      'Este Air Jordan 1 Mid combina o melhor dos 2 mundos: discreto e irreverente',
    foto: './assets/img/jordan_03.jpg',
    preco: 1999,
  },
  {
    id: 4,
    modelo: 'Air Jordan 1 Mid "White Gold Black"',
    descricao:
      'Nunca viu esse modelo no Brasil? Te explicamos! O Jordan 1 Mid "White Gold Black" é um modelo de muito sucesso lançado somente nos Estados Unidos e Europa',
    foto: './assets/img/jordan_04.jpg',
    preco: 1890,
  },
];

const findAllJordansService = () => {
  return jordans;
};

const findByIdJordanService = (id) => {
  return jordans.find((jordan) => jordan.id == id);
};

const createJordanService = (jordan) => {
  const newId = jordans[jordans.length - 1].id + 1;
  jordan.id = newId;
  jordans.push(jordan);
  return jordan;
};

const updateJordanService = (id, jordanEdit) => {
  jordanEdit['id'] = id;
  const index = jordans.findIndex((jordan) => jordan.id == id);
  jordans[index] = jordanEdit;
  return jordanEdit;
};

const deleteJordanService = (id) => {
  const index = jordans.findIndex((jordan) => jordan.id == id);
  return jordans.splice(index, 1);
};

module.exports = {
  findAllJordansService,
  findByIdJordanService,
  createJordanService,
  updateJordanService,
  deleteJordanService,
};
