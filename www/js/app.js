angular.module('starter', ['ionic', 'starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })
    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'homeCtrl'
            }
        }
    })
    .state('tab.menu', {
        url: '/menu',
        views: {
            'tab-menu': {
                templateUrl: 'templates/tab-menu.html',
                controller: 'menuCtrl'
            }
        }
    })
    .state('tab.contact-us', {
        url: '/contact-us',
        views: {
            'tab-contact-us': {
                templateUrl: 'templates/tab-contact-us.html',
                controller: 'contactUsCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise('/tab/home');

});
