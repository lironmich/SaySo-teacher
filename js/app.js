angular.module('teacherApp', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/teacher', {
                controller: 'movieTableManage',
                controllerAs: 'main',
                templateUrl: '/public/apps/SaySo-teacher/templates/Partials/movieList.ejs'
            })
            .otherwise('/');
    }]);