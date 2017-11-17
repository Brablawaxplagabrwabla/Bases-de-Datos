/**
 * HOftalmologia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'hoftalmologia',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    historia:{
      type: 'integer',
      required: true,
      columnName: 'Historia_idHistoria'
    },

    formula:{
      type: 'string',
      size: 45,
      columnName: 'Formula'
    },

    refraccion:{
      type: 'string',
      size: 45,
      columnName: 'Refraccion'
    }

  }
};
