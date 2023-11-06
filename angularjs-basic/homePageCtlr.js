var app = angular.module('myApp', []);

app.controller('homePageCtlr', function ($scope,$http) {
    $scope.greeting = 'Hello, AngularJS!';
    $scope.name = "Naznin";
});