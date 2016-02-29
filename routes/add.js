'use strict';


var data = require('../data.json');

exports.viewAdd = function(req, res) {
   //console.log(req.query);
   //console.log(req);
   //console.log(res);
    var newEntry = {
		'title' :req.query.title,
	   	'date' :req.query.date,
	   	'edit' :req.query.date,
	   	'category' :req.query.category,
		'description' :req.query.description,
		'newest' :"true"
	   }	
   
    //console.log(newEntry);
    //console.log(validateForm(newEntry));
    if( validateForm(newEntry) ){
		
		updateScore(req.query.category)

   		data["entries"].push(newEntry);
		//.log(req.query.dest);
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
    	//Code goes here to make title and category messages appear.
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
