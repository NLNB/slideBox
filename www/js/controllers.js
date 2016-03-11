angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $http, $location, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});





  
})
.controller('LoginCtrl', function($scope, $state, $http, backEndURL, $rootScope) {
  $scope.loginData = {};

  $scope.doLogin = function(){

    var url = backEndURL + "flag=checkPhoneLogin&USERNAME="+$scope.loginData.username+"&PASSWORD="+$scope.loginData.password+"&callback=JSON_CALLBACK";

    $http.jsonp(url,{}).success(function(data){

      if('error' === data[0].responseMessage){
        $scope.msg = data[0].errorMessage;
      } else {
        $rootScope.user = data[0];
        $state.go('app.browse');
      }

    }).error(function(){
      console.log("request back end had an error happend!")
    });

  };

  $scope.doReset = function(){
    $scope.loginData = {username:'',password:''};
  };

})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
