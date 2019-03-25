// 已在作用域中声明但还没有赋值的变量，是 undefined 的。
// 相反，还没有在作用域中声明 过的变量，是 undeclared 的。

var a;
console.log(a); // undefined
//之所以注释下面一句，是因为会报错
// console.log(b);// ReferenceError: b is not defined

console.log(typeof a); 
console.log(typeof b);

// 由于 typeof 的特殊保护机制，可以访问未定义的变量b,并返回undefined
// 因此下面的代码演示了全局变量检查的安全做法
// // 这样会抛出错误 
// if (DEBUG) {
//     console.log( "Debugging is starting" );
// }
// // 这样是安全的
// if (typeof DEBUG !== "undefined") {
//     console.log( "Debugging is starting" );
// }

// if (typeof atob === "undefined") {
//     atob = function() { /*..*/ };
// }