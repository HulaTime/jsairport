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

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  })

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane)
    expect(airport.planes()).toContain(plane)
  })

  it('can clear planes for takeoff', function() {
    weather.isStormy.and.returnValue(false)
    airport.clearForLanding(plane)
    airport.clearForTakeOff(plane)
    expect(airport.planes()).not.toContain(plane)
  })






})
