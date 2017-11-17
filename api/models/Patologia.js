/**
 * Patologia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'patologia',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      columnName: 'idPatologia'
    },

    nombre: {
      type: 'string',
      unique: true,
      required: true,
      size: 100,
      columnName: 'NombrePat'
    },

    descripcion: {
      type: 'string',
      required: true,
      size: 100,
      columnName: 'Descripcion'
    },

    transmision: {
      type: 'string',
      size: 100,
      columnName: 'ModoTrans'
    },

    patogenesis: {
      type: 'string',
      size: 100,
      columnName: 'Patogenesis'
    }

  }
};

