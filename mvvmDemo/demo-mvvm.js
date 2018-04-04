// 创建一个MVVM构造函数
// 这里用es6方法将options赋一个初始值，防止没传，等同于options || {}
function Mvvm(options = {}) {
  // vm.$options Vue上是将所有属性挂载到上面
  // 所以我们也同样实现，将所有属性挂载到了$options
  this.$options = options
  // this._data 这里也和Vue一样
  let data = this._data = this.$options.data

  // 数据劫持
  observe(data)
}

/*
** 为什么要做数据劫持？
**1.观察对像，给对像增加Object.defineProperty
**2.vue特点是不能新增不存在的属性，不存在的属性没有get和set
**3.深度响应 因为每次赋予一个新
**
*/

// 创建一个observe构造函数
// 写数据劫持的主要逻辑

function Observe(data) {
  // 所谓数据劫持就是给对象增加get,set
  // 先遍历一遍对象再说
  for (let key in data) {  // 把data属性通过defineProperty的方式定义属性
    let val = data[key]
    observe(val)  // 递归继续向下找，实现深度的数据劫持
    Object.defineProperty(data, key, {
      configurable: true,
      get() {
        return val
      },
      set(newVal) {  // 更改值的时候
        if (val === newVal) {  // 设置的值和以前值一样就不理它
          return
        }
        val = newVal  // 如果以后再获取值（get）的时候，将刚才设置的值再返回去
        observe(newVal)  // 当设置为新值后，也需要把新值再去定义成属性
      }
    })
  }
}

// 外面再写一个函数
// 不用每次调用都写个new
// 也方便递归调用
function observe(data) {
  // 如果不是对象的话就直接return掉
  // 防止递归溢出
  if (!data || typeof data !== 'object') return
  return new Observe(data)
}