var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype.forage = function(treasure) {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.eat = function() {
  Object.create(Grub.eat);
};

RetiredForagerBee.prototype.gamble = function(bet) {
  bet = bet || 'gold';
  this.treasureChest.push(bet);
};