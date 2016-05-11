'use strict'

function Airport(weather){
  this._hangar = []
  this._weather = new Weather()
}

Airport.prototype.planes = function(){ return this._hangar }

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {throw Error("Can't Land in stormy weather")}
  this._hangar.push(plane)
}

Airport.prototype.clearForTakeOff = function(plane) {
  if(this._weather.isStormy()) {throw Error("Can't Take Off in stormy weather")}
  this._hangar.pop(plane)
}

// Airport.prototype.isStormy = function() {
//   return false
// }
