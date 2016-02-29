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
   			//console.log(data.categories[ent]);
   			//console.log("NewEntry")
   			if (data.categories[cat].category == data.entries[ent].category){
   				//console.log("HEREERERE")
               data.entries[ent].mystyle = "";
               if (data.entries[ent].newest == "true"){
                  data.entries[ent].newest = "false";
                  data.entries[ent].mystyle = "color:red";
               }
   				data["entries-sorted"].push(data.entries[ent]);
   			}
   		}
   }
   res.render('history',{'data':data});
};
