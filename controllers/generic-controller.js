function GenericController($scope, $http) {

    $http.get('/data/' + targetfile).success(function (data) {
        $scope.apps = data;
    });
}