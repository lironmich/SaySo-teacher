var app = angular.module('teacherApp');

app.controller('userSubtitlesInputController', ['$scope', function($scope) {
    $scope.subtitles = {
        sourceLang: '',
        targetLang: '',
        text: [ /* {source, target, start, duration }*/]
    }

    $scope.$watch('sourceLang', function(newValue) {
        $scope.subtitles.sourceLang = newValue;
    })

    $scope.$watch('targetLang', function(newValue) {
        $scope.subtitles.targetLang = newValue;
    })

    $scope.loadGoogleTranslate = function() {

    }

    $scope.loadSrt = function(){

    }

    $scope.mergeGoogleTranslate = function() {

    }

    $scope.mergeSrt = function() {

    }
}]);