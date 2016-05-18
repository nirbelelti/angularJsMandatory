angular.module('mandatory').
    config(function($stateProvider, $urlProvider){

    $urlRouterProvider.otherwise('/registrationForm');

    $stateProvider

        .state('questionnaireForm',{
        url:'/questionnaireForm',
        templateUrl: 'views/questionnaireForm.html',
        controller:'FormRegistrationCTRL'
        })

        .state('profile',{
            url:'/profile',
            templateUrl:'views/profile.html',
            controller:''
        })
});