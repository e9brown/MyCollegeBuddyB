'use strict';


var data = require('../data.json');

exports.viewAdd = function(req, res) {
   //console.log(req.query);
    var newEntry = {
		'title' :req.query.title,
	   	'date' :req.query.date,
	   	'edit' :req.query.date,
	   	'category' :req.query.category,
		'description' :req.query.description
	   }	
   
    //console.log(newEntry);
    console.log(validateForm(newEntry));
    if( validateForm(newEntry) ){
		
		updateScore(req.query.category)

   		data["entries"].push(newEntry);
		console.log(req.query.dest);
		if(req.query.dest == "Submit") {
			res.render("index", {'data':data});
		}
		else {
			res.render("add", {'data':data});
		}
   	}
	else {
   	res.render("add", {'data':data});
	}

};

function updateScore(categorytoupdate) {
	var totalcategories = data["categories"].length;
	for (var i = 0; i < totalcategories; i++) {
		if (data["categories"][i].category == categorytoupdate) {
			console.log("", data["categories"][i].score)
			data["categories"][i].score++;
			console.log("", data["categories"][i].score)
			return;

		}
	}
	var newcategory = { 'category':categorytoupdate, 'score':"1" };
		data["categories"].push(newcategory);
}

function validateForm(entry) {
    if (entry.title == "" || entry.title == null
    	|| entry.category == "" || entry.category == null){
    	console.log("Title and Category are required fields.")
    	//$(".alert").html('<p>The field above is required to submit. </p>');
    	//validateMessage();
    	return false;
    }
    else return true;
};

/* $(document).read(function(){
	intializePage();
})
function initialzePage(){
	$('.submit').click(validateMessage);
} */

/*function validateMessage(){
	$(".alert").html('<p>The field above is required to submit. </p>');
}*/
