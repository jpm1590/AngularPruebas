var app=angular.module("myapp",["ngResource"]);
  
app.controller("cntrl",["$scope", function($scope) {
	$scope.mensaje=["Hola Mundo controller"];
}]);

app.controller("controlSum",["$scope", function($scope) {
  
	$scope.total = 0;
	$scope.valor = 0;
  
	$scope.sumar = function(){
		$scope.total += parseInt($scope.valor);
	}
	$scope.restar = function(){
		$scope.total -= parseInt($scope.valor);
	}
}]);


app.controller("appController", function ($scope, $http, dataResource) {

    $scope.datosResource = dataResource.get();
});

app.factory("dataResource", function ($resource) {
	
    return $resource("content.json", 
        {}, { get: { method: "GET", isArray: true }
    })
});


app.controller("controlFile1",["$scope", "$http", function($scope, $http) {
	
	$scope.archivo = 'content.json';
	$scope.contenido = [];

	$scope.fetchContent = function() {
		$http.get($scope.archivo).then(function(result){
			$scope.contenido = result.data;
		});
	}
	$scope.fetchContent();
}]);

//https://github.com/angular/angular-phonecat/compare/step-7...step-8
//https://docs.angularjs.org/tutorial/step_08