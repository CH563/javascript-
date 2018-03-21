# let和const

> let和const在很多工程师眼里可能只是变显声明符，其实错了，他还是有很小细节值得注意的

## 块级作用域

在ES6之前我们脑海里应该只存在全局作用域和函数作用域，没有块级作用域。那么为什么要引入块级作用域呢？

- 避免外层变量被覆盖

```javascript
var str = 'hello'
function d() {
  console.log(str)
  if (false){
    var str = 'world'
  }
}
d() // undefined
```

，当函数被执行的时候生成了一个新的作用域也就是函数作用域，js引擎会把变量声明提到方法体的最前面，大家可以看到只是声明了并没有赋值。所以就是 undefined。

## 暂时性死区

很多人可能秀迷惑，如果说我们使用了let和const命令，作用域内会对这些命令声明的变量，在它的声明周期内形成一种封闭作用域。这在语法上，称为“暂时性死区”。代码展示如下：

```javascript
if (true) {
  tmp = 'abc' // ReferenceError
  console.log(tmp); // ReferenceError
  let tmp
  console.log(tmp) // undefined
  tmp = 123
  console.log(tmp) // 123
}
```

因为let和const声明是不会被提升的，所以为了保障声明的有效性，js的解释引擎会对变量所处的块级作用域形成一种保护，因此在声明之前使用会有语法错误，是不被允许的。

## 不能重复声明

```javascript
function de(){
  var a = '1'
  var a = '2'
  console.log(a)
}
de() // 不报错

function de(){
  let a = '1'
  let a = '2'
  console.log(a)
}
de() // 报错
```

## const常量

const声明符的大多特性和let相同，这里就不多做解释了。大家都知道const是声明常量的，一但变量被声明成常量它就不能再被继续修改了。大家要注意的是这里变量不可被修改的是存储的地址值不可被修改，意思就是简单类型的数据是不能修改的。复合类型的数据（主要是对像和数组）const只能保证这个指针固定的，而这个具体的对象实例包含的属性是可以被修改的。看看代码我们可能会更清楚：

```javascript
const a = 'hello'
console.log(a) // hello
a = 'world' // Assignment to constant variable

// 实例二
const obj = {}
obj.name = 'jack'
console.log(obj.name) // jack
obj = {} // Assignment to constant variable

// 实例三
const a = []
a.push('Hello')
console.log(a) // ['Hello']
a.length = 0
a = ['Dave'] // Assignment to constant variable
```
