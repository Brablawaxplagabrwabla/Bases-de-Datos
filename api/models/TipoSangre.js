/**
 * Especialidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'tiposangre',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id:{
      type: 'int',
      primaryKey: true,
      required: true,
      autoIncrement: true,
      columnName: 'idTipoSangre'
    },

    tipodesangre:{
      type: 'string',
      size: 5,
      required: true,
      columnName: 'TipoSangre'
    }


  }
};
