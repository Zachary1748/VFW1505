var codingLanguages = ["HTML","CSS","JavaScript","C Sharp","PHP","Objective C","Swift","Java"];

arrayTextLabel.text = codingLanguages[0];
var currentArray = 0;

var nextArray = function(){
	if (currentArray == codingLanguages.length - 1) {
		currentArray = 0;
	} else {
		currentArray++;
	}
	
	arrayTextLabel.text = codingLanguages[currentArray];
};

var prevArray = function(){
	if (currentArray == 0) {
		currentArray = codingLanguages.length - 1;
	} else {
		currentArray--;
	}
	
	arrayTextLabel.text = codingLanguages[currentArray];
};

nextView.addEventListener("click", nextArray);
previousView.addEventListener("click", prevArray);