var app = angular.module("todoListModule", []);
app.controller("myController", function($scope) {
    $scope.list = [{
        name: 'Go Home',
        isFinished: true
    }, {
        name: 'Go work',
        isFinished: true
    }, {
        name: 'Take bus',
        isFinished: false
    }];

    $scope.avalibleItemsNumber = updateAvalibleItemsNumber();

    $scope.newItemName = "";

    $scope.addToDoItem = function() {
        if ($scope.newItemName.length > 0) {
            $scope.list.push({
                name: $scope.newItemName,
                isFinished: false
            });
            $scope.newItemName = "";
        }
    };

    $scope.delToDoItem = function(index) {
        $scope.list.splice(index, 1);
    };

    $scope.$watch('list', function() {
        $scope.avalibleItemsNumber = updateAvalibleItemsNumber();
    }, true);

    function updateAvalibleItemsNumber() {
        return $scope.list.filter(function(value) {
            return !value.isFinished;
        }).length;;
    };
});
