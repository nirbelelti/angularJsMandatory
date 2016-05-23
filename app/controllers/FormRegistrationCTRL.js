/**
 * Created by fiejelved on 18/05/16.
 */

angular.module("mandatory").
controller("FormRegistrationCTRL",
    function($scope, $state, $resource, $http) {
    $scope.user={};

        $scope.register = function() {
            //this should navigate sending the registration to the new state.


            $http({ method: "POST",
                data: $scope.user,
                url: "http://angularkea1.azurewebsites.net/api/internships/Create/"})
                .success(function(data) {
                    console.log(data);

                    //$scope.$parent.dummyInternships.push($scope.internship);
                    //delete the internship from the local array, dummyInternships.

                    $state.go("questionnaireForm");
                }).error(function(data) {
            });
        };


    });




    var today = new Date();

    //configured $resource
    /*$scope.usersResource =
    $resource(
        "http://angularkea2.azurewebsites.net/api/internships/:id",
        { id: "@id" },
        {
            update: { method: 'PUT' }
        }
    );

    //retrieve all users
    $scope.usersResource.query(
    function(data) {
        $scope.dummyUsers = data;
    }, function(data) {
        //something went wrong....
    });*/



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

