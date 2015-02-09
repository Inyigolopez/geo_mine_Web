var dataTableController = angular.module('dataTableController', []);

dataTableController
	.controller('DataTableCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/data').success(function(data) {
      $scope.datos = data;
    });

    $scope.text = 'Visualizacion de datos';
  }]);