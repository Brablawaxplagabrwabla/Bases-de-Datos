/**
 * Paciente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'paciente',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      columnName: 'idPaciente'
    },

    cedula: {
      type: 'integer',
      required: true,
      unique: true,
      columnName: 'Cedula'
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
    },

    edo_civil: {
      type: 'string',
      size: 45,
      columnName: 'EdoCivil'
    },

    direccion: {
      type: 'string',
      size: 100,
      required: true,
      columnName: 'Direccion'
    },

    nivel_educativo: {
      type: 'string',
      size: 100,
      columnName: 'NivelEduc'
    },

    fecha_nac: {
      type: 'date',
      required: true,
      columnName: 'FechaNac'
    },

    nacionalidad: {
      type: 'string',
      size: 45,
      columnName: 'Nacionalidad'
    },

    sexo: {
      type: 'string',
      size: 1,
      required: true,
      columnName: 'Sexo'
    },

    correo: {
      type: 'email',
      size: 60,
      columnName: 'Correo'
    },

    estado: {
      type: 'string',
      size: 60,
      required: true,
      columnName: 'Estado'
    }
  }
};

