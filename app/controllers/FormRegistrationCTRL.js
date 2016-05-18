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
