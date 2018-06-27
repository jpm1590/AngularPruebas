var app=angular.module("myapp",[]);
  
app.controller("cntrl",["$scope", function($scope) {
	$scope.mensaje="Hola Mundo controller";
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


app.controller("controlFile",["$scope", function($scope) {
	
	$scope.archivo = 'content.json';
	$scope.contenido = [];

	$scope.fetchContent = function() {
		$http.get($scope.archivo).then(function(result){
			$scope.contenido = result.data;
		});
	}
}]);

//https://github.com/angular/angular-phonecat/compare/step-7...step-8
//https://github.com/angular/angular-phonecat/compare/step-7...step-8