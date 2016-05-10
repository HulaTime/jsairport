describe('Airport', function() {

  var plane
  var airport

  beforeEach(function() {
    plane = new Plane()
    airport = new Airport
  })

  it('airport dock starts empty', function() {
    expect(airport.dock).toEqual([])
  })


})