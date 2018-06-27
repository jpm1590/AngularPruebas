var app=angular.module("myapp",[]);
  
app.controller("cntrl",["$scope", function($scope) {
  $scope.mensaje="Hola Mundo controller";
}]);

app.controller("controlSuma",["$scope", function($scope) {
  
  $scope.total = 0;
  $scope.valor = 0;
  
  $scope.sumar = function(){
    $scope.total += parseInt($scope.valor);
  }
  $scope.restar = function(){
    $scope.total -= parseInt($scope.valor);
  }
}]);