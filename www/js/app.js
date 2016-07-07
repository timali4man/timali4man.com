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

// .controller('GalleryCtrl', [function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
 
  // $scope.aliHistoryPics = [{
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_aristotle.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_modern_rome.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_panini.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_einstein.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_rome_gallery.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_wilde.jpg'
  // }];
 
  // $scope.aliLikesPics = [{
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_aristotle.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_modern_rome.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_panini.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_einstein.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_rome_gallery.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_wilde.jpg'
  // }];

  // $scope.timHistoryPics = [{
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_aristotle.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_modern_rome.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_panini.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_einstein.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_rome_gallery.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_wilde.jpg'
  // }];
 
  // $scope.timLikesPics = [{
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_aristotle.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_modern_rome.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_panini.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_einstein.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_rome_gallery.jpg'
  // }, {
  //   src: '../img/{{ item.shortname }}/{{ item.shortname }}_wilde.jpg'
  // }];

//   $scope.zoomMin = 1;

//   $scope.showImages = function(index) {
//   $scope.activeSlide = index;
//   $scope.showModal('../templates/detail.html');
//   };
 
//   $scope.showModal = function(templateUrl) {
//     $ionicModal.fromTemplateUrl(templateUrl, {
//       scope: $scope
//     }).then(function(modal) {
//       $scope.modal = modal;
//       $scope.modal.show();
//     });
//   };
   
//   $scope.closeModal = function() {
//     $scope.modal.hide();
//     $scope.modal.remove();
//   };
   
//   $scope.updateSlideStatus = function(slide) {
//     var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
//     if (zoomFactor == $scope.zoomMin) {
//       $ionicSlideBoxDelegate.enableSlide(true);
//     } else {
//       $ionicSlideBoxDelegate.enableSlide(false);
//     }
//   };
  
// }]);
