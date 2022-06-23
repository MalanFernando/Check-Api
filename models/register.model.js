const {db, DataTypes} = require('../utils/database.util')

//Create our model=>(table)
const Register = db.define('register',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    entranceTime:{
        type: DataTypes.DATE,
        allowNull: false
    },
    exitTime:{
        type: DataTypes.DATE,
        allowNull: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'working'
    }
},{timestamps: false})

module.exports = {Register}