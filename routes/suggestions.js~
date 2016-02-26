var data = require('../data.json');
/*
 * GET home page.
 */
exports.viewSuggestions = function(req, res){

   var weak = identifyLowest();
   var mysugg = generateSuggestions(weak);
   res.render('suggestions', {'data':data, 'lowest':weak, 'suggestions':mysugg}); 
};

function generateSuggestions(weakareas) {
	var numweak = weakareas.length;
	console.log(numweak);
	for (var key in data["mysugg"]) {
		delete data["mysugg"][key];
	}
	var temp = '{ "suggestions" : [] }';
	var results = JSON.parse(temp);
	if (numweak == 2) {
		var customdone = false;
	
		for (var i = 0; i < data["suggestions"].length; i++) {
		  for (var k = 0; k < numweak; k++) {	
			if (weakareas[k].toString() == "Sports") {
				if (data["suggestions"][i].id == "sports1") {
					data["mysugg"].push(data["suggestions"][i]);
				}
				if (data["suggestions"][i].id == "sports2") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			}
			else if (weakareas[k].toString() == "Community-Service") {
				if (data["suggestions"][i].id == "community-service1") {
					data["mysugg"].push(data["suggestions"][i]);
				}
				if (data["suggestions"][i].id == "community-service2") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			}
			else if (weakareas[k].toString() == "Leadership") {
				if (data["suggestions"][i].id == "leadership1") {
					data["mysugg"].push(data["suggestions"][i]);
				}
				if (data["suggestions"][i].id == "leadership2") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			}
			else if (!customdone) {
				customdone = true;
				if (data["suggestions"][i].id == "custom1") {
					data["mysugg"].push(data["suggestions"][i]);
				}
				if (data["suggestions"][i].id == "custom2") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			}
		  }
		}
	}
	else if (numweak == 1) {
		for (var i = 0; i < data["suggestions"].length; i++) {
		
			if (weakareas[0].toString() == 'Sports') {
				if (data["suggestions"][i].id == "sports1") {
					data["mysugg"].push(data["suggestions"][i]);
				}
				if (data["suggestions"][i].id == "sports2") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			}
			else if (weakareas[0].toString() == "Community-Service") {
				if (data["suggestions"][i].id == "community-service1") {
					data["mysugg"].push(data["suggestions"][i]);
				}
				if (data["suggestions"][i].id == "community-service2") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			}
			else if (weakareas[0].toString() == "Leadership") {
				if (data["suggestions"][i].id == "leadership1") {
					data["mysugg"].push(data["suggestions"][i]);
				}
				if (data["suggestions"][i].id == "leadership2") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			}
			else {
				if (data["suggestions"][i].id == "custom1") {
					data["mysugg"].push(data["suggestions"][i]);
				}
				if (data["suggestions"][i].id == "custom2") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			}

			if (data["suggestions"][i].id == "generic1") {
					data["mysugg"].push(data["suggestions"][i]);
				} 
			if (data["suggestions"][i].id == "generic2") {
					//data["mysugg"].push(data["suggestions"][i]);
				} 
		
		}
	}
	else {
		console.log("one or too many weaknesses");
		for (var i = 0; i < data["suggestions"].length; i++) {
			if (data["suggestions"][i].id == "rounded") {
					data["mysugg"].push(data["suggestions"][i]);
				}
			if (data["suggestions"][i].id == "generic1") {
					data["mysugg"].push(data["suggestions"][i]);
				} 
			if (data["suggestions"][i].id == "generic2") {
					data["mysugg"].push(data["suggestions"][i]);
				} 
		}
	}
	console.log("returning"); 
	return results;
}

function identifyLowest() {
	var categcnt = data["categories"].length;
	var lowestval = 29000;
	var lowest = [];

	for (var i = 0; i < categcnt; i++) {
		var thisval = parseInt(data["categories"][i].score);
		if (thisval < lowestval) {
			//single array entry and update lowestval
			lowest = [(data["categories"][i].category)];
			lowestval = thisval;
		}
		else if (thisval == lowestval) {
			lowest.push(data["categories"][i].category)
		}
	}
	console.log(lowest.toString() == "Sports");

	return lowest;
}



