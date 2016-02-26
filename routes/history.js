var data = require("../data.json");
/*
 * GET home page.
 */
exports.viewHistory = function(req, res){
   //console.log(data.entries);	


   data["entries-sorted"] = [];
   for (cat in data.categories){
   	//console.log("HEREERERE")

   	//console.log(data.categories[cat]);
   		for (var ent in data.entries){
   			console.log(data.categories[ent]);
   			if (data.categories[cat].category == data.entries[ent].category){
   				//console.log("HEREERERE")
   				data["entries-sorted"].push(data.entries[ent]);
   			}
   		}
   }
   res.render('history',{'data':data});
};


