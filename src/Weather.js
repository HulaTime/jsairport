function Weather() {
  STORM_CHANCE = 0.5
}

Weather.prototype.isStormy = function() {
  if(Math.random() >= STORM_CHANCE) { return true }
  if(Math.random() < STORM_CHANCE) { return false }
}


