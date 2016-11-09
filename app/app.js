var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider, $locationProvider)
{
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/',{
		templateUrl:'app/login/login.html',
		controller:'loginCtrl',
	})
	.when('/login',{
		templateUrl:'app/login/login.html',
		controller:'loginCtrl',
	})
	.when('/dashboard',{
		templateUrl:'app/dashboard/dashboard.html',
		controller:'dashboardCtrl',
	})
	.otherwise ({ redirectTo: '/' });
});