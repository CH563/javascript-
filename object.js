var Chinese = {
  nation: '中国'
}
Chinese.birthPlaces = ['北京', '上海', '香港']
// var Doctor = {
//   career: '医生'
// }

function object (o) {
  function F () {}
  F.prototype = o
  return new F()
}

function extendCopy (p) {
  var c = {}
  for (var i in p) {
    c[i] = p[i]
  }
  c.uber = p
  return c
}

function deepCopy (p, c) {
  var c = c || {}
  for (var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {}
      deepCopy(p[i], c[i])
    } else {
      c[i] = p[i]
    }
  }
  return c
}

var Doctor = deepCopy(Chinese)
Doctor.career = '医生'
Doctor.birthPlaces.push('厦门')
console.log(Doctor.birthPlaces)
console.log(Chinese.birthPlaces)
console.log([].constructor === Array)