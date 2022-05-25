'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class timeline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      timeline.belongsTo(models.user)
    }
  }
  timeline.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    comment: {
      allowNull: true,
      type: DataTypes.STRING
    },
    like: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  }, {
    // hooks: {
    //   beforeCreate: (timeline, options) => {
    //     timeline.image = timeline.image || "https://via.placeholder.com/150";
    //   }
    // },
    sequelize,
    modelName: 'timeline',
  });
  return timeline;
};