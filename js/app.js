angular.module('teacherApp', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'movieTableManage',
                templateUrl: 'http://127.0.0.1:8888/public/apps/SaySo-teacher/templates/Partials/movieList.html'
            })
            .otherwise('/');
    }]);

/*
 angular.module('sayso', ['ngRoute', 'ngSanitize'])
 .constant('MOVIES_URL', 'http://127.0.0.1:8888/rdata/movies')
 .constant('SUBTITLES_URL', 'http://127.0.0.1:8888/rdata/subtitle')
 .config(['$routeProvider', function($routeProvider) {
 $routeProvider
 .when('/', {
 controller: 'mainController',
 controllerAs: 'main',
 templateUrl: 'http://127.0.0.1:8888/public/apps/SaySo-client/freelancer-mobile/partials/main.html'
 })
 .otherwise('/');
 }]);
*/
