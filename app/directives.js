/**
 * Created by fiejelved on 27/05/16.
 */

    var app = angular.module('mandatory');

app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            console.log('it works?');
            if(event.which === 13) {
                console.log('does it work?');
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

// Add image to your profile

/*
app.directive('myDirective', function (httpPostFactory) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attr) {

            element.bind('change', function () {
                var formData = new FormData();
                formData.append('file', element[0].files[0]);
                httpPostFactory('upload_image.php', formData, function (callback) {
                    // recieve image name to use in a ng-src
                    console.log(callback);
                });
            });

        }
    };
});

app.factory('httpPostFactory', function ($http) {
    return function (file, data, callback) {
        $http({
            url: file,
            method: "POST",
            data: data,
            headers: {'Content-Type': undefined}
        }).success(function (response) {
            callback(response);
        });
    };
});*/