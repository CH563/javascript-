function Animal () {
}
Animal.prototype.species = '动物'
function Cat (name, color) {
  this.name = name
  this.color = color
}
function extend (Child, Parent) {
  var F = function () {}
  F.prototype = Parent.prototype
  Child.prototype = new F()
  Child.prototype.constructor = Child
  Child.uber = Parent.prototype
}
function extend2 (Child, Parent) {
  var p = Parent.prototype
  var c = Child.prototype
  for (var i in p) {
    c[i] = p[i]
  }
  c.uber = p
}

extend2(Cat, Animal)
var cat1 = new Cat('大毛', '黄色')
console.log(cat1.name)
console.log(cat1.species)