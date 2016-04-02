/**
 * GravatarController
 *
 * @description :: Server-side logic for managing gravatars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	redirect: function (req, res, next) {
      res.redirect("http://www.gravatar.com/avatar/" + sails.crypto.createHash('md5').update(req.params.email.toLowerCase() || '').digest('hex'));
  }
};

