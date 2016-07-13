var book = angular.module('bookModule', ['ngRoute']);

book.controller("mainController", ["$scope", "$http", function($scope, $http) {
    $http.get('data/main.json').then(function(response) {
        $scope.gerbs = response.data;
        console.log("$scope.gerbs", $scope.gerbs);
    });


}]);

book.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    // route for the about page
    .when('/categories', {
        templateUrl: 'pages/categories.html',
        controller: 'aboutController'
    })

    .when('/about_project', {
        templateUrl: 'pages/about_project.html',
        controller: 'aboutController'
    })

    // route for the participation_in_the_project page
    .when('/participation_in_the_project', {
        templateUrl: 'pages/participation_in_the_project.html',
        //controller: 'contactController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        //controller: 'contactController'
    });
});
