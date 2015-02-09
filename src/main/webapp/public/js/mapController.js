var mapController = angular.module('mapController', []);

mapController
	.controller('MapCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/map').success(function(data) {
      $scope.datos = data;
    });

    $scope.text = 'Mapa con datos';
  }]);