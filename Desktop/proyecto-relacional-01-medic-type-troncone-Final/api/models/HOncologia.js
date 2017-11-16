/**
 * HOncologia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'honcologia',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    historia:{
      type:'integer',
      required: true,
      columnName: 'Historia_idHistoria'
    },

    metastasis:{
      type: 'integer',
      size: 1,
      columnName: 'Metastasis'
    },

    estadoCancer:{
      type: 'string',
      size: 45,
      columnName: 'EstadoCancer'
    },

    vidaRestante:{
      type: 'string',
      size: 45,
      columnName: 'VidaRestante'
    }
  }
};
