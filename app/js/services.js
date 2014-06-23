'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
    .factory('Event', function($resource){
        return $resource('http://localhost:8080/events/:eventId', {}, {})
    })
