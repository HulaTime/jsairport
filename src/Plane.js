function Plane() {}

Plane.prototype.land = function(airport) {

  if (typeof airport.taxi === "function") {
    airport.taxi(this)
  }
}
