const chai = require('chai');
const { expect } = require('chai');
const round = require('lodash.round');

const Geocon = require('../src/geocon');
const SAMPLE = require('./sample');




describe('Geocon class', function() {

  before(function () {});


  beforeEach(function () {});


  afterEach(function () {});


  after(function () {});


  describe('implements latLngToUtm, a method which', function () {
    it('converts geographic coordinates (latitude and longitude) to cartographic coordinates (easting and northing)', latLngToUtmSuccesses);
  });

  describe('implements utmToLatLng, a method which', function () {
    it('converts cartographic (easting and northing) coordinates to geographic coordinates (latitude and longitude)', utmToLatLngSuccesses);
  });
});


function latLngToUtmSuccesses () {
  const self = this;
  const geocon = new Geocon(0);

  return true;
}


function utmToLatLngSuccesses () {
  const self = this;
  const geocon = new Geocon(0);

  SAMPLE.forEach(function(city){
    let latitude = city.latitude;
    let longitude = city.longitude;
    let zone = city.zone;
    let southern = city.southern;
    let easting = city.easting;
    let northing = city.northing;
    expect(geocon.utmToLatLng(easting, northing, zone, southern))
      .to.have.property('lat')
      .that.is.finite;
    expect(Math.abs(geocon.utmToLatLng(easting, northing, zone, southern).lat))
      .to.be.within(0.999*Math.abs(latitude), Math.abs(latitude)*1.001);
    expect(geocon.utmToLatLng(easting, northing, zone, southern))
      .to.have.property('lng')
      .that.is.finite;
    expect(Math.abs(geocon.utmToLatLng(easting, northing, zone, southern).lng))
      .to.be.within(0.999*Math.abs(longitude), Math.abs(longitude)*1.001);
  });
}
