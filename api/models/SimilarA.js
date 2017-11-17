/**
 * SimilarA.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'similara',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    medicamento:{
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'Medicamento_idMedicamento'

    },

    similar:{
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'Medicamento_idMedicamento1'


    }


  }
};
