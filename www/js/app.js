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
}])

.controller('GalleryCtrl', function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

  $scope.usImages = [{
    src: 'img/us_pics/CraterLake.jpg'
  }, {
    src: 'img/us_pics/LakeTahoe1.jpg'
  }, {
    src: 'img/us_pics/JRT21.jpg'
  }, {
    src: 'img/us_pics/JRT6.jpg'
  }, {
    src: 'img/us_pics/JRT10.jpg'
  }, {
    src: 'img/us_pics/HurricaneRidge.jpg'
  }, {
    src: 'img/us_pics/MtRainier.jpg'
  }, {
    src: 'img/us_pics/SanFran.jpg'
  }, {
    src: 'img/us_pics/Ystone.jpg'
  }];

  $scope.piImages = [{
    src: 'img/pi_pics/GarciasCoffee.jpg'
  }, {
    src: 'img/pi_pics/Carabao1.jpg'
  }, {
    src: 'img/pi_pics/ourHouse.jpg'
  }, {
    src: 'img/pi_pics/Puerto1.jpg'
  }, {
    src: 'img/pi_pics/Tagbilaran1.jpg'
  }, {
    src: 'img/pi_pics/Batad9.jpg'
  }, {
    src: 'img/pi_pics/Manila.jpg'
  }, {
    src: 'img/pi_pics/Boracay05b.jpg'
  }, {
    src: 'img/pi_pics/Boracay05k.jpg'
  }, {
    src: 'img/pi_pics/Boracay05s.jpg'
  }, {
    src: 'img/pi_pics/Baguio8.jpg'
  }];

  $scope.lucbanImages = [{
    src: 'img/lucban_pics/00.jpg'
  }, {
    src: 'img/lucban_pics/01.jpg'
  }, {
    src: 'img/lucban_pics/02.jpg'
  }, {
    src: 'img/lucban_pics/03.jpg'
  }, {
    src: 'img/lucban_pics/04.jpg'
  }, {
    src: 'img/lucban_pics/05.jpg'
  }, {
    src: 'img/lucban_pics/06.jpg'
  }, {
    src: 'img/lucban_pics/07.jpg'
  }, {
    src: 'img/lucban_pics/08.jpg'
  }, {
    src: 'img/lucban_pics/09.jpg'
  }, {
    src: 'img/lucban_pics/10.jpg'
  }, {
    src: 'img/lucban_pics/11.jpg'
  }, {
    src: 'img/lucban_pics/12.jpg'
  }, {
    src: 'img/lucban_pics/13.jpg'
  }, {
    src: 'img/lucban_pics/14.jpg'
  }, {
    src: 'img/lucban_pics/15.jpg'
  }];

  $scope.travelsImages = [{
    src: 'img/travels_pics/HongKong31.jpg'
  }, {
    src: 'img/travels_pics/Macau14.jpg'
  }, {
    src: 'img/travels_pics/Macau37.jpg'
  }, {
    src: 'img/travels_pics/Macau52.jpg'
  }, {
    src: 'img/travels_pics/Macau34.jpg'
  }, {
    src: 'img/travels_pics/Macau32.jpg'
  }, {
    src: 'img/travels_pics/Zhuhai17.jpg'
  }, {
    src: 'img/travels_pics/Zhuhai22.jpg'
  }, {
    src: 'img/travels_pics/Disneyland34.jpg'
  }, {
    src: 'img/travels_pics/Bison5.jpg'
  }, {
    src: 'img/travels_pics/GrandCanyon49.jpg'
  }, {
    src: 'img/travels_pics/LasVegas46.jpg'
  }, {
    src: 'img/travels_pics/OldFaithful5.jpg'
  }, {
    src: 'img/travels_pics/Vancouver1.jpg'
  }, {
    src: 'img/travels_pics/SantaMonica3.jpg'
  }, {
    src: 'img/travels_pics/Vancouver6.jpg'
  }, {
    src: 'img/travels_pics/Seattle2.jpg'
  }, {
    src: 'img/travels_pics/GrandCanyon16.jpg'
  }, {
    src: 'img/travels_pics/VirgCity.jpg'
  }];

  $scope.lizzyImages = [{
  src: 'img/lizzy_pics/Lizzy1.jpg'
  }, {
    src: 'img/lizzy_pics/Lizzy2014.jpg'
  }, {
  src: 'img/lizzy_pics/chillin.jpg'
  }, {
    src: 'img/lizzy_pics/12.jpg'
  }, {
    src: 'img/lizzy_pics/lizzy_head_rest.jpg'
  }, {
    src: 'img/lizzy_pics/lizzy_balcony_4.jpg'
  }, {
    src: 'img/lizzy_pics/Conehead.jpg'
  }];

  $scope.zoomMin = 1;

  $scope.showUsImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/us-gallery-zoomview.html');
  };

  $scope.showPiImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/pi-gallery-zoomview.html');
  };

  $scope.showLucbanImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/luc-gallery-zoomview.html');
  };

  $scope.showTravelsImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/travels-gallery-zoomview.html');
  };

  $scope.showLizzyImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/lizzy-gallery-zoomview.html');
  };


  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
  };

  $scope.updateSlideStatus = function(slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };
});
