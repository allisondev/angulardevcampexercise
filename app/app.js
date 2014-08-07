(function(){
	'use strict';

	angular.module('devcamp-angular', [ 'ngRoute','devcamp-angular-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();