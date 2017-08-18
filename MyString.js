function MyString (str) {
  var list = []
  for (var i in str) {
    list[i] = str[i]
    this[i] = str[i]
  }
  this.list = list
  this.length = list.length
  this.toString = function () {
    var nStr = ''
    for (var i = 0; i < this.list.length; i++) {
      nStr += this.list[i]
    }
    return nStr
  }
  this.valueOf = function () {
    return this.toString()
  }
  this.charAt = function (num) {
    return this.list[num]
  }
  this.concat = function (cstr) {
    return this.toString() + cstr
  }
  this.slice = function (start, end) {
    var nStr = ''
    if (start < 0) {
      start = this.list.length + start
    }
    if (end) {
      if (end < 0) {
        end = this.list.length + end
      }
    } else {
      end = this.list.length - 1
    }
    for (var i = start; i < end; i++) {
      nStr += this.list[i]
    }
    return nStr
  }
  this.split = function (s) {
    var arr = []
    var nStr = ''
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i] === s) {
        arr.push(nStr)
        nStr = ''
      } else {
        nStr += this.list[i]
      }
    }
    arr.push(nStr)
    return arr
  }
  this.reverse = function () {
    return this.list.reverse().join('').toString()
  }
  // return this.list
}

var a = new MyString('hello')
console.log(a.length) // 5
console.log(a[1]) // e
console.log(a.toString()) // hello
console.log(a.valueOf()) // hello
console.log(a.charAt('1')) // e
console.log(a.concat(' world')) // hello world
console.log(a.slice(0, -1)) // hell
console.log(a.split('e')) // ['h','llo']
console.log(a.reverse()) // olleh
