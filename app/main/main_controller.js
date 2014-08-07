(function(){
  'use strict';


  angular.module('devcamp-angular-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        })
        .when('/login', {
          templateUrl: 'main/login.html',
          controller: 'LoginCtrl'
        })
        .when('/todo', {
          templateUrl: 'main/todo.html',
          controller: 'TodoCtrl'
        });
    })
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    })
    .controller('LoginCtrl', function ($scope) {
      $scope.greeting = 'Hello world!';
    })
    .controller('TodoCtrl', function ($scope) {
      $scope.tasks = [];
      $scope.taskToAdd = "";
      $scope.taskToRemove = "";
      
      $scope.addATask = function (task) {
        $scope.tasks.push({
          name: task
        });
      };

      $scope.removeATask = function (index) {
        $scope.tasks.splice(index, 1);
      };

    });

})();