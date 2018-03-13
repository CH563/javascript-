# Javascript模块化编程

随着网站逐渐变成“互取网应用程序”，嵌入网页的javascript代码起来越庞大，越来越复杂。

 Javascript模块化编程，已经成为一个迫切的需求。理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块。

 ## 原始写法

 ```javascript
function m1(){
  //...
}
function m2(){
  //...
}
 ```

这样虽然也可以实现模块，直接调用就可以

但这种做法的缺点很明显：污染了全局变量，无法保证不与其他模块发生变量名冲突，而且模块成员之间看不出直接关系。

## 对象写法

为了解决上面的缺点，可以把模块写成一个对象，所有模块成员都放到这个对象里面。

```javascript
var module1 = new Object({
  _count: 0,
  m1: function(){
    //...
  },
  m2: function(){
    //...
  }
})

// 调用
module1.m1()
```
但是这样的写法会暴露所有成员，内部状态可以被外部改写。比如，外部代码可以直接改变内部计数器的值：
```javascript
module1._count = 5
```

## 立即执行函数写法

使用“立即执行函数”（Immediately-Invoked Function Expression, IIFE），可以达到不暴露私有成员的目的。

```javascript
var module1 = (function(){
  var _count = 0
  var m1 = function(){
    //...
  }
  var m2 = function(){
    //...
  }
  return {
    m1: m1,
    m2: m2
  }
})()

// 调用
module1._count // undefined
module1.m1()
```

这就是javascript模块的基本写法，下面再对这种写法加工一下

## 放大模式

如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用 “放大模式”（augmentation）

```javascript
var module1 = (function(mod){
  mod.m3 = function(){
    //...
  }
  return mod
})(module1)
```

## 宽放大模式（Loose augmentation）

在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。如果采用上一节的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用“宽放大模式”

```javascript
var module1 = (function(mod){
  //...
  return mod
})(window.module1 || {})
```

与“放大模式”相比，“宽放大模式”就是“立即执行函数”的参数可以是空对象

## 输入全局变量

独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互

为了在模块内部调用全局变量，必须显式地将其他变量输入模块

```javascript
var module1 = (function($, YAHOO){
  //...
})(jQuery, YAHOO)
```

上面的module1模块需要使用jQuery库和YUI库，就把这两个库（其实是两个模块）当作参数输入module1。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。