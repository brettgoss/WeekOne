var resources = {
  gold: 100,
  // Update the gold value
  changeGold: function(value) {
    this.gold += value;
  },
  getGold: function() {
    console.log('gold');
  }

}
module.exports = resources;