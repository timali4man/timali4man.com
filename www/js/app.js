// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab' : {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('tabs.detail', {
      url: '/list/:aId',
      views: {
        'list-tab' : {
          templateUrl: 'templates/detail.html',
          controller: 'ListController'
        }
      }
    })

    .state('tabs.portfolios', {
      url: '/list',
      views: {
        'list-tab' : {
          templateUrl: 'templates/portfolios.html',
          controller: 'ListController'
        }
      }
    })

    .state('tabs.us', {
      url: '/us',
      views: {
        'us-tab' : {
          templateUrl: 'templates/us.html'
        }
      }
    })

    .state('tabs.philippines', {
      url: '/philippines',
      views: {
        'philippines-tab' : {
          templateUrl: 'templates/philippines.html'
        }
      }
    })

    .state('tabs.travels', {
      url: '/travels',
      views: {
        'travels-tab' : {
          templateUrl: 'templates/travels.html'
        }
      }
    })

    .state('tabs.lizzy', {
          url: '/lizzy',
          views: {
            'lizzy-tab' : {
              templateUrl: 'templates/lizzy.html'
            }
          }
        });

  $urlRouterProvider.otherwise('/tab/home');

  $ionicConfigProvider.tabs.position('bottom');
})

.controller('ListController', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichartist=$state.params.aId;

  });
}]);
