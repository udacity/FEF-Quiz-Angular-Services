'use strict';

describe('Controller: LotsOBricksCtrl', function () {

  // load the controller's module
  beforeEach(module('serviceQuizApp'));

  var LotsOBricksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LotsOBricksCtrl = $controller('LotsOBricksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LotsOBricksCtrl.awesomeThings.length).toBe(3);
  });
});
