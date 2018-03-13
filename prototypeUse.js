// Number.prototype对象部署方法，可以链式调用

Number.prototype.add = function (x) {
  return this + x
}
Number.prototype.subscribe = function (x) {
  return this - x
}
Number.prototype.iterate = function () {
  var result = []
  for (var i = 0; i <= this; i++) {
    result.push(i)
  }
  return result
}
// 调用
console.log((8).add(2).subscribe(4).iterate())


// 如果调用时可以不用后面的刮号就好了，如：(8).double.square
// 可以做到！ES5规定，每个对象的属性都有一个取值方法get，用来自定义该属性的读取操作
// 详细：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/get

Number.prototype = Object.defineProperty(
  Number.prototype, 'double', {
    get: function () {
      return (this + this)
    }
  }
)

Number.prototype = Object.defineProperty(
  Number.prototype, 'square', {
    get: function () {
      return (this * this)
    }
  }
)
// 调用
console.log((8).double.square)
// 方括号运算符
console.log(8['double']['square'])