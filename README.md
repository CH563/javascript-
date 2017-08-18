# JAVASCRIPT-DIARY
javascript日常练习

## 实现在一个跟内建函数String()一样的，MyString()方法

实现功能如下：

```javascript
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
```
