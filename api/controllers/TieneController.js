/**
 * TieneController
 *
 * @description :: Server-side logic for managing Tienes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  delete: function(req, res) {
    Tiene.destroy({paciente: req.param('id')}).exec( function(err, tiene) {
      return tiene;
    })
  }

};

