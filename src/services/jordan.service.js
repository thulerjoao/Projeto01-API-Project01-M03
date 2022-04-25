const Jordans = require('../models/Jordan');

const findAllJordansService = async () => {
  const allJordans = await Jordans.find();
  return allJordans;
};

const findByIdJordanService = async (id) => {
  const oneJordan = await Jordans.findById(id);
  return oneJordan;
};

const createJordanService = async (jordan) => {
  const newJordan = await Jordans.create(jordan);
  return newJordan;
};

const updateJordanService = async (id, jordanEdit) => {
  const jordanUpdate = await Jordans.findByIdAndUpdate(id, jordanEdit);
  return jordanUpdate;
};

const deleteJordanService = async (id) => {
  return await Jordans.findByIdAndDelete(id);
};

module.exports = {
  findAllJordansService,
  findByIdJordanService,
  createJordanService,
  updateJordanService,
  deleteJordanService,
};
