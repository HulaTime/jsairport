'use strict'

describe('Feature Test:', function(){
  var plane
  var airport
  var weather

  beforeEach(function(){
    plane = new Plane()
    airport = new Airport()
    // weather = new Weather()
  })

  it('planes can be instructed to land at an airport', function() {
    spyOn(Math,'random').and.returnValue(0)
    plane.land(airport)
    expect(airport.planes()).toContain(plane)
  })

  it('planes can be instructed to take off from an airport', function() {
    spyOn(Math,'random').and.returnValue(0)
    plane.land(airport)
    plane.takeOff()
    expect(airport.planes()).not.toContain(plane)
  })


  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  it('blocks takeoff when weather is stormy', function(){
    spyOn(Math,'random').and.returnValue(0)
    plane.land(airport)
    spyOn(airport._weather,'isStormy').and.returnValue(true)
    expect(function() { airport.clearForTakeOff(plane) }).toThrowError("Can't Take Off in stormy weather")
    expect(airport.planes()).toContain(plane)
  })

  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when weather is stormy

  it('blocks landing when weather is stormy', function() {
    spyOn(Math,'random').and.returnValue(0.9)
    expect(function() { airport.clearForLanding(plane) }).toThrowError("Can't Land in stormy weather")
    expect(airport.planes()).not.toContain(plane)
  })



})
