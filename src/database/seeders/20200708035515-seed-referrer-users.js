import { UserFactory } from '../factories';

export default {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const treferrer = await queryInterface.sequelize.transaction();
    try {
      const referrer = await UserFactory(3);
      await queryInterface.bulkInsert('Users', referrer, { treferrer });
      await treferrer.commit();
    } catch (err) {
      await treferrer.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('Users', null, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
