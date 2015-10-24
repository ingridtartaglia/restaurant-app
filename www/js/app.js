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
    .state('tab.about-us', {
        url: '/about-us',
        views: {
            'tab-about-us': {
                templateUrl: 'templates/tab-about-us.html',
                controller: 'aboutUsCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise('/tab/home');

});
