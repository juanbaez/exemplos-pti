'use strict';

var starFoz = angular.module('starFoz', [ 'ngRoute' ]);

starFoz.constant('appInfo', {
  name: 'StarFoz',
  versionCode: '0.1',
  versionName: 'lime-goldfish'
});

starFoz.config(function($routeProvider) {

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    });
});