/**
 * Medicamento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'medicamento',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    id:{
      type:'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName:'idMedicamento'
    },

    nombreComercial:{
      type:'string',
      size: 200,
      required: true,
      unique: true,
      columnName: 'NomComercial'
    },

    efectosSec:{
      type: 'string',
      size: 200,
      required: true,
      columnName: 'EfectosSec'
    },

    contraindicaciones:{
      type: 'string',
      size: 200,
      required: true,
      columnName: 'Contraindicaciones'
    }

  }
};
