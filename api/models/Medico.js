/**
 * Medico.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'medico',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      columnName: 'idMedico'
    },

    licencia: {
      type: 'integer',
      required: true,
      unique: true,
      columnName: 'Licencia'
    },

    nombre: {
      type: 'string',
      required: true,
      size: 45,
      columnName: 'Nombre'
    },

    apellido: {
      type: 'string',
      required: true,
      size: 45,
      columnName: 'Apellido'
    }
  }
};

