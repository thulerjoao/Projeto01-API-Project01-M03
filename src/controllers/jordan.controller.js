const jordansService = require('../services/jordan.service');
const mongoose = require('mongoose');

const  findAllJordansController = async (req, res) => {
  const allJordans = await jordansService.findAllJordansService();
  if (allJordans.length == 0) {
    return res.status(404).send({ message: 'Nenhum Jordan foi encontrado.' });
  }
  res.send(allJordans);
};

const findByIdJordanController = async (req, res) => {
  const id = req.params.id;
  const chosenjordan = await jordansService.findByIdJordanService(id);
  res.send(chosenjordan);

  if(!chosenjordan){
    return res.status(404).send({message: 'Jordan não encontrado.'})
  }
};

const createJordanController = async (req, res) => {
  const jordan = req.body;
  const newJordan = await jordansService.createJordanService(jordan);
  res.status(201).send(newJordan);
};

const updateJordanController = async (req, res) => {
  const id = req.params.id;
  const editJordan = req.body;
  const updateJordan = await jordansService.updateJordanService(id, editJordan );
  res.send(updateJordan);
};

const deleteJordanController = async (req, res) => {
  const id = req.params.id;
  await jordansService.deleteJordanService(id);
  res.send({ message: 'Jordan apagado com sucesso!' });
};

module.exports = {
  findAllJordansController,
  findByIdJordanController,
  createJordanController,
  updateJordanController,
  deleteJordanController,
};
