/**
JavaScript 有七种内置类型:
• 空值(null)
• 未定义(undefined)
• 布尔值( boolean)
• 数字(number)
• 字符串(string)
• 对象(object)
• 符号(symbol，ES6 中新增)
 */
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof 42)
console.log(typeof "42")
console.log(typeof { life: 42 })
console.log(typeof Symbol())

//null 由于历史原因，比较特殊，不能直接typeof，需要使用如下代码判断
var a = null;
if (!a && typeof a === "object") {
    console.log('a is null')
}

//还有一种情况:
// typeof function a(){ /* .. */ } === "function"; // true
//它实际上是 object 的一个“子类型”。具体来说，函数是“可调用对象”，它有一个内部属 性 [[Call]]，该属性使其可以被调用
