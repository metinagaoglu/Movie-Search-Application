angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
/* Arama Controller  */
.controller('araCtrl', function ($scope, $state){
  $scope.filmarama = function (film){
    $state.go('tab.listeleme',{film:film});
  }
})
/* Listeleme Controller  */
.controller('listelemeCtrl', function($scope, $http ,$stateParams) {
  $http.get('http://www.omdbapi.com/?s='+ $stateParams.film)
  .success(function (response){
    $scope.filmler = response;
  });
})
/* Detay Controller  */
.controller('detayCtrl', function($scope, $http, $stateParams){
  $http.get('http://www.omdbapi.com/?i='+ $stateParams.id +'&plot=short&r=json')
  .success(function (response){
    $scope.detay = response;
  });
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
