describe('Weather', function() {

  var weather

  beforeEach(function() {
    weather = new Weather()
  })

  it('can be stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.6)
    expect(weather.isStormy()).toEqual(true)
  })

  it('can be not stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.3)
    expect(weather.isStormy()).toEqual(false)
  })

})
