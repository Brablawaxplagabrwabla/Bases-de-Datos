/**
 * Estado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'estado',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id:{
      type: 'integer',
      primaryKey: true,
      required: true,
      autoIncrement: true,
      columnName: 'idEstado'
    },

    codigo:{
      type: 'integer',
      required: true,
      unique: true,
      columnName: 'CodigoEdo'

    },

    estado:{
      type: 'string',
      size: 50,
      required: true,
      columnName: 'Estado'
    }
  }
};
