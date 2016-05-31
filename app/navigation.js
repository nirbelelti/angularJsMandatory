angular.module('mandatory').
    config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/registrationForm');

    $stateProvider
        .state('registrationForm',{
        url: '/registrationForm',
        templateUrl: 'views/registrationForm.html',
        controller: 'FormRegistrationCTRL'
    })
        .state('questionnaireForm',{
        url:'/questionnaireForm',
        templateUrl: 'views/questionnaireForm.html',
        controller:'FormRegistrationCTRL',
            params: { profileParameter: null }
        })

        .state('matches',{
            url:'/matches',
            templateUrl:'views/matches.html',
            controller:'FormRegistrationCTRL',
        })

        .state('profile',{
            url:'/profile',
            templateUrl:'views/profile.html',
            controller:'',


        });
});