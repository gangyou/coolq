'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ListCtrl', ['$scope', 'Event',function($scope, Event) {
    var _getWeekOfYear = function(){
        var today = new Date();
        var daysPassed = (today - new Date(today.getFullYear(), 0, 1)) / ( 24 * 3600 * 1000 ) + 1;
        return Math.ceil(daysPassed / 7);
    };

    $scope.init = function(){
        var currentWeek = _getWeekOfYear();
        $('.week_item:eq(' + currentWeek + ')').addClass('current');
        $('.week_item:lt(' + currentWeek + ')').addClass('passed');

        var events = Event.query(function(){
            angular.forEach(events, function(value, key){
                var week = value.week;
                var nameNode = $('<span/>').text(value.name).addClass('name');
                var itemNode = $('<span/>').text(value.item).addClass('item');
                $('.week_item:eq(' + week + ')').addClass('comming').empty().append(nameNode).append(itemNode);
            })
        });
    }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
