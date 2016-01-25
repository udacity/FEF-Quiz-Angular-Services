'use strict';

describe('Service: brickWarehouse', function () {

  // load the service's module
  beforeEach(module('serviceQuizApp'));

  // instantiate service
  var brickWarehouse;
  beforeEach(inject(function (_brickWarehouse_) {
    brickWarehouse = _brickWarehouse_;
  }));

  it('should do something', function () {
    expect(!!brickWarehouse).toBe(true);
  });

});
