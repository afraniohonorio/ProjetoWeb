'use strict';

app.controller('loginController', ['$scope', '$location', function($scope, $location){

  $scope.falhou = false;
  $scope.Padrao = {};
  $scope.Padrao.login = 'admin';
  $scope.Padrao.senha = '123456';

  $scope.doLogin = function(){

    if($scope.loginModel.usuario === $scope.Padrao.login && $scope.loginModel.senha === $scope.Padrao.senha){
      //ir para Dashboard
      $location.path('/dashboard');
    }else{
      $scope.falhou = true;
    }
  };
}]);
