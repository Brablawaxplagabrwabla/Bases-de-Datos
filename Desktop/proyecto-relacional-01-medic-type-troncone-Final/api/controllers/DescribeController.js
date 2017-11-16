/**
 * DescribeController
 *
 * @description :: Server-side logic for managing Describes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  delete: function(req, res) {
    var object = req[0];
    _.forEach(object, Describe.destroy({historia: object.Historia_idHistoria}, function(err){
      if (err) sails.log(err);
      return;
    }));
  }

};

