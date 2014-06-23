'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ListCtrl', ['$scope', function($scope) {
    var _getWeekOfYear = function(){
        var today = new Date();
        var daysPassed = (today - new Date(today.getFullYear(), 0, 1)) / ( 24 * 3600 * 1000 ) + 1;
        return Math.ceil(daysPassed / 7) + 1;
    };

    $scope.init = function(){
        var currentWeek = _getWeekOfYear() - 1;
        $('.week_item:eq(' + currentWeek + ')').addClass('current');
        $('.week_item:lt(' + currentWeek + ')').addClass('passed');

    }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
