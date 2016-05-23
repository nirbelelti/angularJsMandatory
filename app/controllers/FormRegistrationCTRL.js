/**
 * Created by fiejelved on 18/05/16.
 */

angular.module("mandatory").
controller("FormRegistrationCTRL",
    function($scope, $state) {

        $scope.editUserProfile = function(mandatory) {
            //this should navigate sending the registration to the new state.
            $state.go("",
                {mandatory:mandatory});

        }
    });

    var today = new Date();

    //configured $resource
    $scope.usersResource =
    $resource(
        "http://nodedb.herokuapp.com/users:id",
        { id: "@id" },
        {
            update: { method: 'PUT' }
        }
    );

    //retrieve all internships
    $scope.usersResource.query(
    function(data) {
        $scope.dummyUsers = data;
    }, function(data) {
        //something went wrong....
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

