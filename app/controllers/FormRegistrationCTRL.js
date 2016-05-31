/**
 * Created by fiejelved on 18/05/16.
 */

angular.module("mandatory").
controller("FormRegistrationCTRL",
    function($scope, $state, $resource, $http, $stateParams) {

        $scope.user={};
        $scope.users = [];

        $scope.user = $stateParams.profileParameter;


        $scope.register = function() {
            //this function should just send to next view instead of submitting
            $scope.regForm.$submitted=true;

            if($scope.regForm.$valid) {
                console.log('register submit');
                $http({
                    method: "POST",
                    data: $scope.user,
                    url: "http://nodedb2.herokuapp.com/users/Create"
                })
                    .success(function (data) {
                        console.log(data);

                        $scope.users.push($scope.user);


                        //delete the internship from the local array, dummyInternships.

                        $state.go("profile");
                    }).error(function (data) {
                });
            }else{
                console.log('else?');
                $scope.regForm.$invalid
            }
        };

        $http({ method: "GET",
            url: "http://nodedb2.herokuapp.com/users/GetAll"})
            .success(function (data) {
                console.log(data);
                $scope.users = data;


            }).error(function (data) {

        });

        $scope.deleteUser = function(user) {
            console.log("delete user");

            console.log(user);

            $http({ method: "DELETE",
                data: $scope.user,

                url: "http://nodedb2.herokuapp.com/users/Delete/" + user._id })


                .success(function(data) {

                    console.log(user._id);

                    for(var i = $scope.users.length - 1; i >= 0; i--) {
                        if($scope.users[i]._id === user._id) {

                            $scope.users.splice(i,1);
                        }
                    }
                    console.log($scope.internship);
                    console.log("iteme removed");
                    alert("item  deleted");

                    $state.go("registrationForm")

                }).error(function(data) {
            });
        };


        $scope.updateUser = function(user) {
            if ($scope.user._id === undefined) {
                console.log("error")
            }
            else{
            $http({
                method: "PUT",
                data: $scope.user,

                url: "http://nodedb2.herokuapp.com/users/Update/" + user._id
            })
                .success(function (data) {


                    for (var i = $scope.users.length - 1; i >= 0; i--) {
                        if ($scope.users[i]._id === user._id) {


                            $scope.users.push(i, $scope.user);
                            $scope.users[i] = data;


                        }
                        //  console.log("i"+i);

                    }

                    console.log("update " + user._id);


                    $state.go("profile");
                }).error(function (data) {

            });
            }
        };


        $scope.editProfile = function(profileToCopy) {
            //this should navigate sending the internship to the new state.

            //copy the object for editing
            var profileToSend = angular.copy(profileToCopy);

            $state.go("questionnaireForm", //pass internship copy to the state
                { profileParameter: profileToSend });
        };



    });


/*
var today = new Date();

//configured $resource
$scope.usersResource =
    $resource(
        "http://angularkea2.azurewebsites.net/api/internships/:id",
        { id: "@id" },
        {
            update: { method: 'PUT' }
        }
    );
/*
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

