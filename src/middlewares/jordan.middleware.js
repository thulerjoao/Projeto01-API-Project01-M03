const mongoose = require('mongoose');

const validId = (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ message: 'Id inválido.' });
    }else{
        next()
    }
    
}

const validObjectBody = (req, res, next) =>{
    const jordan = req.body;
  if (
    !jordan ||
    !jordan.modelo ||
    !jordan.descricao ||
    !jordan.preco ||
    !jordan.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Cadastro Inválido. Preencha todos os campos.' });
  }
  next();
}

module.exports = {
    validId,
    validObjectBody,
}
