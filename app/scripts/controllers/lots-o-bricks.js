'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('LotsOBricksCtrl', function () {
    this.name = 'Lots O Bricks';
    this.redBricks = {
      '1x1': {
        quantity: 16,
        price: 0.01
      },
      '2x6': {
        quantity: 18,
        price: 0.05
      }
    };
    this.blueBricks = {
      '2x2': {
        quantity: 7,
        price: 0.02
      },
      '2x4': {
        quantity: 2,
        price: 0.04
      }
    };
    this.greenBricks = {
      '2x4': {
        quantity: 13,
        price: 0.04
      },
      '2x8': {
        quantity: 41,
        price: 0.08
      }
    };
  });
