'use strict';

/**
 * @ngdoc overview
 * @name projectWebApp
 * @description
 * # projectWebApp
 *
 * Main module of the application.
 */
var app = angular.module('projectWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardController'
      })
      .when('/pedidos', {
        templateUrl: 'views/pedidos.html',
        controller: 'pedidoController'
      })
      .when('/clientes', {
        templateUrl: 'views/clientes.html',
        controller: 'clienteController'
      })
      .when('/financeiro', {
        templateUrl: 'views/financeiro.html',
        controller: 'financeiroController'
      })
      .when('/fornecedores', {
        templateUrl: 'views/fornecedores.html',
        controller: 'fornecedorController'
      })
      .when('/produtos', {
        templateUrl: 'views/produtos.html',
        controller: 'produtoController'
      })
      .otherwise({
        redirectTo: '/'
      });
    //$locationProvider.html5Mode(true);
  });
