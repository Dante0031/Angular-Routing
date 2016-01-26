var app = angular.module('myApp', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/index', {
            templateUrl:"views/index.html",
            controller:"MainController"
        })
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


}]);

//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
//address controller, functionality of drop down
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]

app.controller('address', ['$scope', '$http', function($scope, $http){
    //$scope.userId = ;
    $http.get('/api/grabUsers').then(function(response){
        $scope.users = response.data;
        console.log('grabUsers response is', $scope.users);
    });


//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    //grabAdd function
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    $scope.grabAdd = function(){
        console.log("made it to the grabAdd");
        $http.get('/api/grabAddress/' + $scope.userId).then(function(response){
                $scope.addresses = response.data;
                console.log('The response is', response);
            });
    };


//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    //grabOrd function
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    $scope.grabOrd = function(){
        console.log("made it to the grabOrd");
        $http.get('/api/grabOrder/' + $scope.userId).then(function(response){
            $scope.orders = response.data;
            console.log('The response is', response);
        });
    };

//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
//order controller, functionality of dropdown
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]

}]);
app.controller('order', ['$scope', '$http', function($scope, $http){
    $http.get('/api/grabUsers').then(function(response){
        $scope.users = response.data;
        console.log('grabUsers response is', $scope.users);
    });


//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    //grabAdd function
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    $scope.grabAdd = function(){
        console.log("made it to the grabAdd");
        $http.get('/api/grabAddress/' + $scope.userId).then(function(response){
            $scope.addresses = response.data;
            console.log('The response is', response);
        });
    };


//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    //grabOrd function
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
    $scope.grabOrd = function(){
        console.log("made it to the grabOrd");
        $http.get('/api/grabOrder/' + $scope.userId).then(function(response){
            $scope.orders = response.data;
            console.log('The response is', response);
        });
    };

}]);



//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
//Calendar
//][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]


app.controller('DateController', ['$scope', function($scope) {
    $scope.date = {
        value: new Date(2013, 9, 22)
    };
}]);




