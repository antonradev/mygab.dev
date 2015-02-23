'use strict';

describe('Service: geoLocationService', function () {

  var geoLocationService;

  beforeEach(function () {

    module('mygab');

    inject(function (_geoLocationService_) {
      geoLocationService = _geoLocationService_;
    });

  });


  it('should do something', function () {
    expect(!!geoLocationService).toBe(true);
  });

});