'use strict';
myCalculator.controller("MainController", function($scope, $interval,
		GetDataService) {

	clearResult();
	$scope.numberPattern = "[+-]?[0-9]*\.?[0-9]+";
	var operationMapping = {
		"+" : "add",
		"-" : "subtract",
		"*" : "multiply",
		"/" : "divide"
	};

	$scope.changeFocus = function(value) {
		$scope.focus = value;
	}
	$scope.reset = function() {
		clearResult();
	}

	$scope.numberOnClick = function(input) {
		if ($scope.focus == "first") {
			if ($scope.first == "0" || !$scope.first) {
				$scope.first = "";
			}
			$scope.first += input;
		}
		if ($scope.focus == "second") {
			if ($scope.second == "0" || !$scope.second) {
				$scope.second = "";
			}
			$scope.second += input;
		}
	}

	$scope.resultOnClick = function() {

		var operation = operationMapping[$scope.operation];
		getResultData(operation, $scope.first, $scope.second);
	}

	function clearResult() {
		$scope.first = 0;
		$scope.second = 0;
		$scope.operation = "+";
		$scope.focus = "";
		$scope.result = "";
	}

	function getResultData(operation, first, second) {
		if ($scope.calculatorForm.first.$valid
				&& $scope.calculatorForm.second.$valid) {
			var queryParam = operation + "/" + first + "/" + second;
			GetDataService.getData(queryParam, function(resp, timeStamp) {
				$scope.result = resp.data;
			});
		}
	}
});