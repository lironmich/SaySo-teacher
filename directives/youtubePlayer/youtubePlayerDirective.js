var app = angular.module('teacherApp');

app.directive('youtubePlayer', function() {
    return {
        restrict: 'E',
        scope: {
            videoUrl: '='
        },
        templateUrl: '/public/apps/SaySo-teacher/directives/youtubePlayer/youtubePlayer.html',
        controller: 'youtubePlayerController'
    }
});
