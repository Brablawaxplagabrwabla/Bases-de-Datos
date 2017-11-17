/**
 * Especialidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'especialidad',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id:{
      type: 'integer',
      primaryKey: true,
      required: true,
      autoIncrement: true,
      columnName: 'idEspecialidad'
    },

    codigo:{
      type: 'integer',
      required: true,
      unique: true,
      columnName: 'CodEsp'
    },

    especialidad:{
      type: 'string',
      size: 50,
      required: true,
      columnName: 'Especialidad'
    }


  }
};
