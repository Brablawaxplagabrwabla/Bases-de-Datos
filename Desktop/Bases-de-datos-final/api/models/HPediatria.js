/**
 * HPediatria.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'hpediatria',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    historia:{
      type: 'integer',
      required: true,
      columnName: 'Historia_idHistoria'
    },

    anchoCabeza:{
      type:'float',
      columnName: 'AnchoCabeza'
    },

    diametroBrazo:{
      type:'float',
      columnName: 'DiametroCabeza'
    },

    crecimiento:{
      type: 'string',
      size: 200,
      columnName: 'Crecimiento'
    }




  }
};
