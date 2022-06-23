const express = require('express');

//Routers
const { registersRouter } = require('./routes/registers.routes');

//utils
const {db} = require('./utils/database.util')

//init express app
const app = express();

app.use(express.json());

 //http://localhost:5000/registers 
app.use('/api/v1/registers', registersRouter) 

db.authenticate()
    .then(()=> console.log('DB authenticated'))
    .catch((err)=> console.log(err))

db.sync()
    .then(()=> console.log('DB sync'))
    .catch((err)=> console.log(err))

app.listen(5000, ()=>{
    console.log('Express running');
});
