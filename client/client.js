var app = angular.module('myApp', ['ngRoute']);


    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        //.when('/', {
        //    templateUrl:"views/index.html",
        //    controller:"MainController"
        //})
        .when('/address', {
            templateUrl:"views/address.html",
            controller:"address"
        })
        .when('/order', {
            templateUrl:"views/order.html",
            controller:"order"
        });

        $locationProvider.html5Mode(true);
}]);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
    $http.get('/api/grabUsers').then(function(response){
        $scope.users = response.data;
    })

}]);
app.controller('address', ['$scope', '$http', function($scope, $http){
    $http.get('/api/grabAddress').then(function(response){
        $scope.addresses = response.data;
    })

}]);
app.controller('order', ['$scope', '$http', function($scope, $http){
    //$http.get('/api/')

}]);