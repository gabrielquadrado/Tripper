angular.module('app').controller('dashboardCtrl', function($rootScope, $scope, $location){
	$('#world-map').vectorMap({map: 'world_mill'});
});