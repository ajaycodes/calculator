/**
 * Addition
 */
exports.add = function(req, res) {
	
	var first = req.params.first, second = req.params.second;
	if(!isNaN(first)&&!isNaN(second)){
		first = Number(first);
		second = Number(second);
		var result = first + second;
		res.json({
			"data" : result
		});
	}else{
		res.json({
			"data" : "Invalid Values"
		});
	}
}

/**
 * Subtraction
 */
exports.subtract = function(req, res) {
	
	var first = req.params.first, second = req.params.second;
	if(!isNaN(first)&&!isNaN(second)){
		first = Number(first);
		second = Number(second);
		var result = first - second;
		res.json({
			"data" : result
		});
	}else{
		res.json({
			"data" : "Invalid Values"
		});
	}
}

/**
 * Multiplication
 */
exports.multiply = function(req, res) {
	
	var first = req.params.first, second = req.params.second;
	if(!isNaN(first)&&!isNaN(second)){
		first = Number(first);
		second = Number(second);
		var result = first * second;
		res.json({
			"data" : result
		});
	}else{
		res.json({
			"data" : "Invalid Values"
		});
	}
}

/**
 * Division
 */
exports.divide = function(req, res) {
	
	var first = req.params.first, second = req.params.second;
	if(!isNaN(first)&&!isNaN(second)){
		first = Number(first);
		second = Number(second);
		if (second == 0) {
			res.json({
				"data" : "Cannot divide by 0"
			});
		} else {
			var result = first / second;
			res.json({
				"data" : result
			});
		}
	}else{
		res.json({
			"data" : "Invalid Values"
		});
	}
}