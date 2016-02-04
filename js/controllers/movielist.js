angular.module('teacherApp')
    .controller('movieTableManage', ['$scope', '$http', function($scope, $http) {

    $http.get('http://127.0.0.1:8888/dbapi/movies').success(function(response){
        console.log('$scope.list at getMovies ');
        $scope.movielist = response;
    })

    console.log("Hello World from tableManage");
}]);
