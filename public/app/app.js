var app = angular.module('app', []);
app.controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: 'Sales Person',
        description: 'you will fight dragons'
    }, {
        title: 'Accountant',
        description: 'you will use the keyboard'
    }];
});