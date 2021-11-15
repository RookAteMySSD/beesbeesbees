var HoneyMakerBee = function() {
  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';
  this.food = 'jelly';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype.eat = function (food) {
  Object.create(Grub.eat);
};

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};