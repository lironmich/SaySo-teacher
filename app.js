var app = angular.module('teacherApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        controller:  'teacherManager',
        templateUrl: '/public/apps/SaySo-teacher/Partials/teacherManager.html'
    })
    .otherwise('/')
}]);