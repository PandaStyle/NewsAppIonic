angular.module('app.controllers', [])

.controller('feedCtrl', ['$scope', '$stateParams', '$http',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.items = [];

  $http.get("http://www.curatist.co:8081/feed/all/50")
    .success(function (response) {
      angular.forEach(response, function (item) {
        $scope.items.push(item);
      });
      console.log($scope.items)
    });
}])

.controller('listCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.items = [];

  $http.get("http://www.curatist.co:8081/feed/all/50")
    .success(function (response) {
      angular.forEach(response, function (item) {
        $scope.items.push(item);
      });
      console.log($scope.items)
    });

}])

.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
