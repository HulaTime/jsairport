function Airport() {

  this.dock = []

}

Airport.prototype.taxi = function(plane) {
  this.dock.push(plane)
}

