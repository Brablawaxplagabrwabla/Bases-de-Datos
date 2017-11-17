/**
 * Especialidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'especialidades',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    medico:{
      type: 'integer',
      required: true,
      columnName: 'Medico_idMedico'
    },

    especialidad:{
      type: 'int',
      required: true,
      columnName: 'Especialidad_idEspecialidad'
    }


  }
};
