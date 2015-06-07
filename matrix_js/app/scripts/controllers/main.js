// var app = angular.module('myApp', []);
matrix_app
    .controller('myCtrl', function($scope) {
        $scope.firstName= "John";
        $scope.lastName= "Doe";
        $scope.number = 5;
        $scope.horizontal = new Array(eval($("#horizontal-slider").val()))
        console.log($scope.horizontal);
        $scope.range = function (num) {
            return new Array(num)
        }
    });




