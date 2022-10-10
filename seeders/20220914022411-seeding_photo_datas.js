'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Photos', [
      {
        title: 'Foto Jadul',
        caption:
          'Waktu itu foto ini diambil di rumah lama bersama keluarga dari ayah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Foto Kenangan',
        caption: 'Foto bersama istri ketika belum menikah',
        image_url: 'https://photokenangan.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Foto Liburan',
        caption: 'Liburan dulu dongss sayy',
        image_url: 'https://photoliburan.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Foto Malming',
        caption: 'Malam minggi bersama istri dan ibu tercinta',
        image_url: 'https://photokenangan.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
