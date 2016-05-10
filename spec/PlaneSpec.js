describe('Plane', function() {

  var plane
  var airport

  beforeEach(function() {
    plane = new Plane()
    airport = new Airport
  })

  it('plane has a land function', function() {
    expect(plane.land).toBeDefined()
  })

  it('airport can tell a plane can land', function() {
    plane.land(airport)
    expect(airport.dock).toContain(plane)
  })


})