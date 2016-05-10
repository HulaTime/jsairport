'use strict'

function Airport(){
  this._dock = []
}

Airport.prototype.planes = function(){ return this._dock }

Airport.prototype.clearForLanding = function(plane) {
  this._dock.push(plane)
}