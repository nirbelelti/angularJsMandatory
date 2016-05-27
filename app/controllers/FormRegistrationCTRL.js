/**
 * Created by fiejelved on 18/05/16.
 */

angular.module("mandatory").
controller("FormRegistrationCTRL",
    function($scope, $state, $resource, $http) {
    $scope.user={};

        $scope.register = function() {
            //this function should just send to next view instead of submitting


            $http({ method: "POST",
                data: $scope.user,
                url: "http://nodedb2.herokuapp.com/users/Create"})
                .success(function(data) {
                    console.log(data);

                    //$scope.$parent.dummyInternships.push($scope.internship);
                    //delete the internship from the local array, dummyInternships.

                    $state.go("profile");
                }).error(function(data) {
            });
        };


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

