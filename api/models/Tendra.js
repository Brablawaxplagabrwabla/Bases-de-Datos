/**
 * Tendra.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'tendra',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    historia:{
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'Historia_idHistoria'
    },

    alergia:{
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'Alergias_idAlergias'
    }




  }
};
