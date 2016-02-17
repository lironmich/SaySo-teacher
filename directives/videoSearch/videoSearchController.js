var app = angular.module('teacherApp');

app.controller('videoSearchController', ['$scope', function($scope) {
    $scope.$watch('searchText', function(newValue) {
        if (!newValue) {
            $scope.videoUrl = '';
            return;
        }

        var id;

        if (newValue.indexOf("http") >= 0) {
            id = newValue.split('v=')[1];
        } else {
            id = newValue;
        }

        videoUrl = 'https://www.youtube.com/embed/' + id;

        $scope.videoUrl = videoUrl;
    })
}]);