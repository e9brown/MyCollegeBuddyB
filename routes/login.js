var data = require('../data.json');

exports.viewLogin = function(req, res) {
   res.render("login", {'data':data}); 
};
