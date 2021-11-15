var Bee = function() {
  this.age = 5;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'keep on growing';
};

Bee.prototype.eat = function(food) {
  Object.create(Grub.eat);
};