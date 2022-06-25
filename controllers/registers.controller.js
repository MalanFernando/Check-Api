const {Register} = require('../models/register.model')

//get all registers
const getAllRegisters = async (req, res)=>{
    try {
        const register = await Register.findAll();

        //process the response
        res.status(200).json({
            status: 'success',
            register,
    });
    } catch (err) {
        console.log(err);
    }
};

//get register by id
const getRegisterById = async (req, res)=>{
    const {id} = req.params;

    const register = await Register.findOne({ where: {id} });

    if (!register) {
        res.status(404).json({
            status: 'error',
            message: 'register not found'
        })
    }

    res.status(200).json({
        status: 'success',
        register,
    })
}

//create register or check in
const createRegister = async (req, res)=>{
    try {
        const { entranceTime } = req.body;

        const newRegister = await Register.create({
            entranceTime
        })

        res.status(201).json({
          status: "success",
          newRegister,
        });
    } catch (error) {
        console.log(error);
    }
};

//update register or check out
const updateRegister = async (req, res)=>{
    try {
      const { id } = req.params;
      const { exitTime } = req.body;

      const register = await Register.findOne({ where: { id } });

      if (!register) {
        res.status(404).json({
          status: "error",
          message: "register not found",
        });
      }

      await register.update({
        exitTime: new Date(),
        status: "Out",
      });

      res.status(204).json({ status: "Register updated" });
    } catch (error) {
      console.log(err);
    }
}

//cancel register
const cancelRegister = async (req, res)=>{
    const {id} = req.params;
    
    const register = await Register.findOne({ where: {id} });

    if (!register) {
        res.status(404).json({
            status: 'error',
            message: 'register not found'
        })
    }

    await register.update({status: 'cancelled'});

    res.status(204).json({ status: 'Register cancelled' })
}


module.exports = {
    getAllRegisters,
    getRegisterById,
    createRegister,
    updateRegister,
    cancelRegister
}