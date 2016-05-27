/**
 * Created by fiejelved on 18/05/16.
 */

angular.module("mandatory").
controller("FormRegistrationCTRL",
    function($scope, $state, $resource, $http) {
    $scope.user={};
        //configured $resource
        $scope.userResource =
            $resource(
                "http://nodedb2.herokuapp.com/users/:id", {id:"@id"}, {update: {method: 'PUT'}});

        //retrieve all users
        $scope.userResource.query(
            function(data) {
                $scope.dummyUsers = data;
            }, function(data) {
                //something went wrong....
            });
        $scope.register = function() {



            $http({ method: "POST",
                data: $scope.user,
                url: "http://nodedb2.herokuapp.com/users/Create"})
                .success(function(data) {
                    console.log(data);
                    $scope.$dummyUsers.push($scope.user);

                    $state.go("profile");
                }).error(function(data) {
            });
        };





    });
    //$http({ method: "GET",
    //    url: "http://nodedb.herokuapp.com/users/getAll" })
    //    .success(function(data) {
    //        console.log(data);
    //        $scope.dummyUsers = data;
    //
    //
    //    }).error(function(data) {
    //
    //    });

