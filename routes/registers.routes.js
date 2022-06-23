const express = require('express');
const {
    getAllRegisters,
    getRegisterById,
    createRegister,
    updateRegister,
    cancelRegister
} = require('../controllers/registers.controller')

//define endpoints
const registersRouter = express.Router()

registersRouter.get('/', getAllRegisters);

registersRouter.get('/:id', getRegisterById);

registersRouter.post('/', createRegister);

registersRouter.patch('/:id', updateRegister);

registersRouter.delete('/:id', cancelRegister)

module.exports = {registersRouter}