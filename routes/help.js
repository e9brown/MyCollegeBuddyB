var data = require('../data.json');
/*
 * GET home page.
 */
exports.viewHelp = function(req, res){
   res.render('help', {'data':data});
};
