'use strict';

describe('Controller: BricksABunchCtrl', function () {

  // load the controller's module
  beforeEach(module('serviceQuizApp'));

  var BricksABunchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BricksABunchCtrl = $controller('BricksABunchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BricksABunchCtrl.awesomeThings.length).toBe(3);
  });
});
