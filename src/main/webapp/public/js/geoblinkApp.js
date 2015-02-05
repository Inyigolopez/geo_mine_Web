angular.module('geoblinkApp', []).controller('indexCtrl', function($scope, $http) {
	$http.get('/resource/').success(function(data) {
		$scope.greeting = data;
		
		$scope.text = 'GEOBlink';
	})
});
