/*
** Promise对象代表一个异步操作，有三种状态：pending(进行中)、fulfilled(已成功)和rejected(已失败)
** 一旦成功就不允许失败，一旦失败就不允许成功
*/
function Promise(executor) {
  // executor 执行器
  this.status = 'pending'
  this.reason = null
  this.data = null
  this.onFulFilledList = []
  this.onRejectedList = []
  const _this = this

  function resolve(data) {
    if (_this.status == 'pending') {
      _this.data = data
      _this.status = 'onFulfilled'
      _this.onFulFilledList.forEach(element => {
        element(_this.data)
      });
    }
  }
  function reject(e) {
    if (_this.status == 'pending') {
      _this.reason = e
      _this.status = 'rejected'
      _this.onRejectedList.forEach(element => {
        element(_this.reason)
      })
    }
  }
  executor(resolve, reject)
}

// 执行时对Promise状态进行修改以及then函数的调用时机进行处理
Promise.prototype.then = function (res, rej) {
  const _this = this
  if (_this.status == 'onFulfilled') {
    res(_this.data)
    return
  }
  if (_this.status == 'rejected') {
    res(_this.reason)
  }
  if (_this.status == 'pending') {
    _this.onFulFilledList.push(res)
    _this.onRejectedList.push(rej)
  }
}

// 测试
function test() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.time('promise')
      console.log(123)
      res('4')
    }, 2000)
  })
}
test().then((params) => {
  console.log(params)
  console.timeEnd('a')
})


