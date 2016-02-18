var app = angular.module('teacherApp');

app.directive('userSubtitlesInput', function() {
    return {
        restrict: 'E',
        scope: {
            subtitles: '='
        },
        templateUrl: '/public/apps/SaySo-teacher/directives/userSubtitlesInput/userSubtitlesInput.html',
        controller: 'userSubtitlesInputController'
    }
});