function isEmpty(obj) {
	var counter = 0;
	
	for (var key in obj){
		counter++;
	}

	if (counter > 0) {return false} else {return true};
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false