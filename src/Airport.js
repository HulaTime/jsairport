'use strict'

function Airport(){
  this._hangar = []
}

Airport.prototype.planes = function(){ return this._hangar }

Airport.prototype.clearForLanding = function(plane) {
  if(this.isStormy()) {throw Error("Can't Land in stormy weather")}
  this._hangar.push(plane)
}

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {throw Error("Can't Take Off in stormy weather")}
  this._hangar.pop(plane)
}

Airport.prototype.isStormy = function() {
  return false
}
