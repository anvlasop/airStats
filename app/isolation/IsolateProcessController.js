'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/isolation', {
    templateUrl: 'isolation/isolated-process.html',
    controller: 'IsolateProcessController'
  });
}])

.controller('IsolateProcessController', ['$scope', function($scope) {

  $scope.processUserFile = function () {
    let userFile = document.getElementById('userFile').files[0];
    alert(userFile.name);
  }

}]);