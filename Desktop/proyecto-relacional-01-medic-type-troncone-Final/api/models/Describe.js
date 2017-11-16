/**
 * Describe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'describe_',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    historia: {
      type: 'integer',
      primaryKey: true,
      columnName: 'Historia_idHistoria'
    },

    patologia: {
      type: 'integer',
      columnName: 'Patologia_idPatologia'
    }

  }
};

