myCalculator.service('GetDataService', function($http) {

	this.getData = function(dataURI, callback) {
		var reqTime = new Date().getTime();
		var resTime;
		return $http({
			method : 'GET',
			url : "/api/" + dataURI
		}).success(function(resp) {
			resTime = new Date().getTime();
			callback(resp, resTime - reqTime);
		}).error(function(err) {
			console.log("Error While Fetching Data " + "/api/" + dataURI);
		});
	}

});