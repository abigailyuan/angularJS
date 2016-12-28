(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.numOfDishes = 0;
    $scope.list = "";


    $scope.check = function() {
      var arrayOfDishes = $scope.list.split(',');
      $scope.numOfDishes = arrayOfDishes.length;
    }

    $scope.sayMessage = function() {
      if($scope.numOfDishes === 0) {
        return "Please enter data first";
      } else if ($scope.numOfDishes <= 3) {
        return "Enjoy!";
      } else {
        return "Too much!";
      }
    }
  }



})();
