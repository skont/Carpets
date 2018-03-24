// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const customers = sequelizeClient.define('customers', {
    //customers fields
    custName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    custAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    custCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    custPhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    custMobile: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  customers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return customers;
};
