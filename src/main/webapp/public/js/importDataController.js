var importDataController = angular.module('importDataController', []);

importDataController
	.controller('ImportDataCtrl', ['$scope', '$http', function ($scope, $http) {
    	$http.get('/importData').success(function(data) {
    	  $scope.datos = data;
   		 });

  		  $scope.text = 'Importación';
 	 }]);