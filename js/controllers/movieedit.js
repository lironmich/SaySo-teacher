angular.module('teacherApp')
    .controller('movieManage', ['$scope', '$http', '$routeParams',
        function($scope, $http, $routeParams) {
            debugger;

            var movieId = $routeParams.id;
            var lansym = $routeParams.lansym;

        //$http.get('http://127.0.0.1:8888/dbapi/languages').success(function(response){
        //    console.log('$scope.list at getMovies ');
        //    $scope.langlist = response;
        //})

        console.log("Hello World from movieManage");
    }]);