import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Referral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Referral.belongsTo(models.User, {
        as: 'ReferredUser',
        foreignKey: 'referralUserId',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      Referral.belongsTo(models.User, {
        as: 'ReferrerDetail',
        targetKey: 'userReferralCode',
        foreignKey: 'referrerCode',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Referral.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    referralUserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    referrerCode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Referral',
    timestamps: true,
    updatedAt: false,
  });
  return Referral;
};
