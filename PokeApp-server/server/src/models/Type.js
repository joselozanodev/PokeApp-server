const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('type', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: {
          msg: "Name cannot be empty"
        },
        isAlpha: {
          msg: "Name must be only letters"
        },
        len: {
          args: [3, 30],
          msg: "Name must be between 3 and 20 characters"
        },
      }
    },
  },{
    timestamps: false,});
}