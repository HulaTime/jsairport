'use strict'

describe('Airport', function(){
  var airport
  var plane
  var weather

  beforeEach(function(){
    airport = new Airport()
    plane = jasmine.createSpy('plane')
    weather = jasmine.createSpyObj('weather', ['isStormy'])
  })

  describe('good weather', function() {

    beforeEach(function() {
      spyOn(Math,'random').and.returnValue(0)
    })

    it('has no planes by default', function(){
      expect(airport.planes()).toEqual([])
    })

    it('can clear planes for landing', function() {
      airport.clearForLanding(plane)
      expect(airport.planes()).toContain(plane)
    })

    it('can clear planes for takeoff', function() {
      airport.clearForLanding(plane)
      airport.clearForTakeOff(plane)
      expect(airport.planes()).not.toContain(plane)
    })

  })

  describe('bad weather', function() {

    beforeEach(function() {
      spyOn(Math,'random').and.returnValue(0.9)
    })

    it('planes can\'t take off in stormy weather', function() {
      expect(function() { airport.clearForTakeOff(plane) }).toThrowError("Can't Take Off in stormy weather")
    })

    it('planes can\'t land in stormy weather', function() {
      expect(function() { airport.clearForLanding(plane) }).toThrowError("Can't Land in stormy weather")
    })

  })


})
