angular.module('geoblinkApp', []).controller('indexCtrl', function($scope, $http) {
	$http.get('/resource/').success(function(data) {
		$scope.greeting = data;
		

        $scope.menuItems = ['Import Data','Data','Maps'];
        $scope.bookmarks = [
            {id:1,name:'Quizzpot.com',url:'https://quizzpot.com',category:'Import Data'},
            {id:2,name:'Html5 Game Devs',url:'https://html5gamedevs.com',category:'Data'},
            {id:3,name:'CSS Tricks',url:'http://css-tricks.com',category:'Data'},
            {id:4,name:'Bootstrap',url:'http://getbootstrap.com',category:'Maps'},
            {id:5,name:'Card',url:'http://jessepollak.github.io/card/',category:'Maps'}
        ];

        $scope.currentCategory = 'Import Data';

        $scope.setCurrentCategory = function(category){
            $scope.currentCategory = category;
        }

        $scope.isCurrentCategory = function(category){
            return $scope.currentCategory === category;
        }


	})
});