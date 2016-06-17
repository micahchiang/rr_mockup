var rentReporters = angular.module('rentReporters', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/partials/form1.html'
		})
		.when('/about', {
			templateUrl: '/partials/about.html'
		})
		.when('/contact', {
			templateUrl: '/partials/contact.html'
		})
		.when('/step2', {
			templateUrl: '/partials/form2.html'
		})
		.when('/step3', {
			templateUrl: '/partials/form3.html'
		})
		.when('/step4', {
			templateUrl: '/partials/form4.html'
		})
	})