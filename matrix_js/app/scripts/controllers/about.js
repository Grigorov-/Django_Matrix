'use strict';

/**
 * @ngdoc function
 * @name matrixJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the matrixJsApp
 */
angular.module('matrixJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
