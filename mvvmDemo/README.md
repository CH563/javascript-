## 几种实现双向绑定的做法

目前几种主流的mvc(vm)框架都实现了单向数据绑定，而我所理解的双向数据绑定无非就是在单向绑定的基础上给可输入元素（input、textare）等添加了change(input)事件，来动态修改model和view，并没有多高深。所以无需太过介怀是实现的单向或双向绑定。

实现数据绑定的做法有大致如下几种：

- 发布者-订阅者模式（backbone.js）
- 脏值检查（angular.js）
- 数据劫持（vue.js）

### 发布者-订阅者模式

> 一般通过sub,pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是`vm.set('property', value)`

Object.defineProperty()说实在的我们大家在开发中确实用的不多，多数是修改内部特性，不过就是定义对象上的属性和值么？

实现框架or库的时候却发挥了大用场了，这个就不多说了，只不过轻舟一片而已，还没到写库的实力

知其然要知其所以然，来看看如何使用

```javascript
let obj = {}
let song = '发如雪'
obj.singer = '周杰伦'

Object.defineProperty(obj, 'music', {
  // value: '七里香',
  configurable: true, // 2.可以配置对象，删除属性
  // writable: true, // 3.可以修改对象
  enumerable: true, // 4.可以枚举
  // ※ get,set设置时不能设置writable和value，它们代替了二者且是互斥的
  get() {
    return song
  },
  set(val) {
    song = val
  }
})

// 下面打印的部分分别是对应代码写入顺序执行
console.log(obj)   // {singer: '周杰伦', music: '七里香'}  // 1
```