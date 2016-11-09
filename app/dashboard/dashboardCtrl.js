angular.module('app').controller('dashboardCtrl', function($rootScope, $scope, $location){
	$('html').css('display','block');
	$('#world-map').vectorMap({map: 'world_mill'});
});