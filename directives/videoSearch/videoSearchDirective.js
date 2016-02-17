var app = angular.module('teacherApp');

app.directive('videoSearch', function() {
    return {
        restrict: 'E',
        scope: {
            videoUrl: '='
        },
        templateUrl: '/public/apps/SaySo-teacher/directives/videoSearch/videoSearch.html',
        controller: 'videoSearchController'
    }
});
