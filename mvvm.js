function observer (obj) {
  let keys = Object.keys(obj)
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    keys.forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

function defineReactive (obj, key, val) {
  observer(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('I am A')
      return val
    },
    set: function (newval) {
      console.log('the name has change')
      observer(val)
      val = newval
    }
  })
}

