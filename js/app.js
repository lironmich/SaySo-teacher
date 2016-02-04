angular.module('teacherApp', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/movies', {
                controller: 'movieTableManage',
                templateUrl: 'http://127.0.0.1:8888/public/apps/SaySo-teacher/Partials/movieList.html'
            })
            .when('/languages', {
                controller: 'languageTableManage',
                templateUrl: 'http://127.0.0.1:8888/public/apps/SaySo-teacher/Partials/languageList.html'
            })
            .when('/movie/:id/:lansym', {
                controller: 'movieManage',
                templateUrl: 'http://127.0.0.1:8888/public/apps/SaySo-teacher/Partials/movie.html'
            })
            .when('/', {
                controller:  'teacherManage',
                templateUrl: 'http://127.0.0.1:8888/public/apps/SaySo-teacher/Partials/main.html'
            })
            .otherwise('/')
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
