angular.module('mandatory').
    config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/registrationForm');

    $stateProvider
        .state('registrationForm',{
        url:'/registrationForm',
        templateUrl:'views/registrationForm',
        controller:''
    })
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