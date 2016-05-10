'use strict'

describe('Feature Test:', function(){
  var plane
  var airport
  var weather

  beforeEach(function(){
    plane = new Plane()
    airport = new Airport()
    weather = jasmine.createSpyObj('weather', ['isStormy'])
  })

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport)
    expect(airport.planes()).toContain(plane)
  })

  it('planes can be instructed to take off from an airport', function() {
    plane.land(airport)
    plane.takeOff()
    expect(airport.planes()).not.toContain(plane)
  })


//   As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy

  // it('planes cannot take off if weather is stormy', function() {
  //   expect(function() {
  //     airport.clearForTakeOff(plane, weather)
  //   }).toThrowError("Plane can't take off in Stormy weather")
  // })

  it('blocks takeoff when weather is stormy', function(){
    plane.land(airport)
    weather.isStormy.and.returnValue(true)
    expect(function(){ plane.takeoff()}).toThrowError('Plane can\'t take off in Stormy weather')
    expect(airport.planes()).toContain(plane)
  })


})
