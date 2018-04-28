// 声明一个人的构造函数，目的是通过new出来的对象都是一个个的具体的人
var Person = function () {
    // 私有属性，该属性 new 出来的对象时无法获取到的
    var prx = 'other'
    
    // 定义了 eye 的属性
    // 在这里 eye 是实例属性，也就是说，通过 new 出来的对象都具备 eye 的属性
    this.name = 'double'

    // 我们用 var 申明了一个私有方法，该方法不能被 new Person 调用到
    // 一般的，我们只需要在内部使用到的方法可最好声明称私有方法
    var prxMethond = function () {
        console.log('in prxMethond')
    }

    // 定义了 say 方法
    // 同 eye,say 是一个实例方法，new 出来的对象都有 say 的方法
    this.say = function(){
        console.log('hi i am ' + this.name)
    }
}

// 为 Person 定义一个原型方法 eat，该方法为公共方法,
// 每一个通过new Person 实例出来的对象都共享同一个eat方法
// 当然如果不想共享可在新对象中进行重写覆盖
Person.prototype.eat = function () {
    console.log(this.name + 'eat something...')
}

// 定义静态方法，该方法目的在于不用new Person就能用该方法,
// 我们把不用实例化就能调用的方法叫做静态方法
Person.staticMethod = function () {
    console.log('this is static method')
}

// 当调用 new 时
var zhangsan = new Person()

// 实际上是
var zhangsan = {}
zhangsan.__proto__ = Person.prototype
Person.call(zhangsan)

/*
1、声明了一个zhangsan的空对象
2、将 Person 的prototype 赋值给 zhangsan 的proto 属性
   关于对象的 prototype 和 proto 概念如下:
   prototype是函数的一个属性（每个函数都有一个prototype属性），这个属性是一个指针，指向一个对象。它是显示修改对象的原型的属性。
   proto是一个对象拥有的内置属性（每个对象都有一个proto属性），是JS内部使用寻找原型链的属性。
   这就是为什么 zhangsan 可以调用到Person原型(Person.prototype)方法的原因
3、调用Person函数,并且把 zhangsan 当成是this传入函数中,这就是为什么 zhangsan 可以调用 Person 函数定义的this.属性或this.方法的原因
*/