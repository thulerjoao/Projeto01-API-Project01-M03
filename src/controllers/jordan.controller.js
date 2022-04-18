const jordansService = require('../services/jordan.service');

const findAllJordansController = (req, res) => {
  const jordans = jordansService.findAllJordansService();
  if (jordans.length == 0) {
    return res.status(404).send({ message: 'Nenhum Jordan foi encontrado.' });
  }
  res.send(jordans);
};

const findByIdJordanController = (req, res) => {
  const id = Number(req.params.id);
  const escolhajordan = jordansService.findByIdJordanService(id);
  if (!escolhajordan) {
    return res
      .status(404)
      .send({ message: 'ID invárido. Jordan não encontrado.' });
  }
  res.send(escolhajordan);
};

const createJordanController = (req, res) => {
  const jordan = req.body;
  if (
    !jordan ||
    !jordan.modelo ||
    !jordan.descricao ||
    !jordan.preco ||
    !jordan.foto ||
    jordan.modelo == 'undefined' ||
    jordan.descricao == 'undefined' ||
    jordan.preco == 'undefined' ||
    jordan.foto == 'undefined'
  ) {
    return res
      .status(400)
      .send({ message: 'Cadastro Inválido. Preencha todos os campos.' });
  }
  const newJordan = jordansService.createJordanService(jordan);
  res.status(201).send(newJordan);
};

const updateJordanController = (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: 'ID inválido ou inesistente.' });
  }
  const jordanEdit = req.body;
  if (
    !jordanEdit ||
    !jordanEdit.modelo ||
    !jordanEdit.descricao ||
    !jordanEdit.preco ||
    !jordanEdit.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Todos os campos devem estar preenchidos.' });
  }
  const updateJordan = jordansService.updateJordanService(id, jordanEdit);
  res.send(updateJordan);
};

const deleteJordanController = (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    return res.status(400).send({ message: 'ID inválido ou inesistente.' });
  }
  const vazio = jordansService.findByIdJordanService(id);
  if (vazio == undefined || vazio == '') {
    return res
      .status(404)
      .send({ message: 'ID inválido. Jordan não encontrado.' });
  }
  jordansService.deleteJordanService(id);
  res.send({ message: 'Jordan apagado com sucesso!' });
};

module.exports = {
  findAllJordansController,
  findByIdJordanController,
  createJordanController,
  updateJordanController,
  deleteJordanController,
};
