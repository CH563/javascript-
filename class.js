// var Cat = {
//   name: '大毛',
//   makeSound: function () {
//     console.log('喵喵喵')
//   }
// }

// // 旧版本浏览器，IE9以下
// if (!Object.create) {
//   Object.create = function (o) {
//     function F () {}
//     F.prototype = o
//     return new F()
//   }
// }
// var cat1 = Object.create(Cat)
// console.log(cat1.name)
// cat1.makeSound()

// 极简主义法
var Animal = {
  createNew: function () {
    var animal = {}
    animal.sleep = function () {
      console.log('睡懒觉')
    }
    return animal
  }
}
var Cat = {
  sound: '喵喵喵', // 私有属性和私有方法
  createNew: function () {
    var cat = Animal.createNew()
    cat.name = '大毛'
    cat.makeSound = function () {
      console.log(Cat.sound)
    }
    cat.changeSound = function (x) {
      Cat.sound = x
    }
    return cat
  }
}
var cat1 = Cat.createNew()
cat1.makeSound()
cat1.sleep()
cat1.changeSound('啦啦啦')
cat1.makeSound()