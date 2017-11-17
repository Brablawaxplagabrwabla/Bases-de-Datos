/**
 * Historia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'historia',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      columnName: 'idHistoria'
    },

    fechaHist: {
      type: 'date',
      required: true,
      columnName: 'FechaHis'
    },

    sintomas: {
      type: 'string',
      required: true,
      columnName: 'Sintomas',
      size: 100
    },

    notas: {
      type: 'string',
      columnName: 'Notas',
      size: 100
    },

    peso: {
      type: 'float',
      required: true,
      columnName: 'Peso'
    },

    estatura: {
      type: 'float',
      required: true,
      columnName: 'Estatura'
    },

    diagnostico: {
      type: 'string',
      columnName: 'Diagnostico',
      size: 100,
      required: true
    },
  }


};

