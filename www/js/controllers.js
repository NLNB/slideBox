angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $http, $location, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    //console.log('Doing login', $scope.loginData);

    var url = "flag=checkPhoneLogin&USERNAME="+$scope.loginData.username+"&PASSWORD="+$scope.loginData.password+"&callback=JSON_CALLBACK";

    $http.jsonp(url,{}).success(function(data){
      //console.log(data);
      $scope.userInfo = data;
      //console.log("wewefwef");
      $scope.closeLogin();
      //$location.path('/app/browse');
      //$state.go('app.browse');
      //$location.url('/app/browse');
    });


    // Simulate a login delay. Remove this and replace with your login code if using a login system
    //$timeout(function() {
    //  $scope.closeLogin();
    //}, 1000);
  };
})
.controller('LoginCtrl', function($scope, $state, $http, backEndURL) {
  $scope.loginData = {};

  $scope.doLogin = function(valid){

    if(!valid){
      $scope.errrorMessage = "dddd";
    };

    var url = backEndURL + "flag=checkPhoneLogin&USERNAME="+$scope.loginData.username+"&PASSWORD="+$scope.loginData.password+"&callback=JSON_CALLBACK";

    $http.jsonp(url,{}).success(function(data){

      if('error' === data[0].responseMessage){

        $scope.msg = data[0].errrorMessage;

      } else {
        console.log("success direct to browse");
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