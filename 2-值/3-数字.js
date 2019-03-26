var a = 42.59;
a.toFixed(0); // "43"
a.toFixed(1); // "42.6"
a.toFixed(2); // "42.59"
a.toFixed(3); // "42.590"
a.toFixed(4); // "42.5900"

var a = 42.59;
a.toPrecision(1); // "4e+1"
a.toPrecision(2); // "43"
a.toPrecision(3); // "42.6"
a.toPrecision(4); // "42.59"
a.toPrecision(5); // "42.590"
a.toPrecision(6); // "42.5900"


// 无效语法:
// 42.toFixed(3); // SyntaxError
// 下面的语法都有效: 
(42).toFixed(3); // "42.000" 
0.42.toFixed(3); // "0.420" 
42..toFixed(3); // "42.000"
//42 .toFixed(3); // "42.000",空格也行，不推荐使用

/**
ES6 支持以下新格式:
0xf3; // 243的十六进制
0o363; // 243的八进制
0O363; // 同上 0b11110011; // 243的二进制
0B11110011; // 同上
考虑到代码的易读性，不推荐使用 0O363 格式，因为 0 和大写字母 O 在一起容易混淆。建
议尽量使用小写的 0x、0b 和 0o。
 */

if (!Number.EPSILON) {
    Number.EPSILON = Math.pow(2, -52);
}
function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
}
var a = 0.1 + 0.2;
var b = 0.3;
var result = numbersCloseEnoughToEqual(a, b);
console.log(result)

//整数检测
Number.isInteger(42);     // true
Number.isInteger(42.000); // true
Number.isInteger(42.3);   // false
//polyfill
if (!Number.isInteger) {
    Number.isInteger = function (num) {
        return typeof num == "number" && num % 1 == 0;
    };
}


// NaN是一个特殊值，它和自身不相等，是唯一一个非自反(自反，reflexive，即x === x不 成立)的值。

//全局的isNaN函数有如下缺陷
var a = 2 / "foo";
var b = "foo";
a; // NaN
b; "foo"
//window.isNaN( a ); // true 
//window.isNaN( b ); // true——晕!
//上面两行不能直接调试，因为调试环境是node环境，而不是浏览器环境
//Es6改进
Number.isNaN(a) //true
Number.isNaN(b) //false
// pollyfill
if (!Number.isNaN) {
    Number.isNaN = function (n) {
        return n !== n;
    };
}

//Object.is用于判断一些特殊值是否相等
var a = 2 / "foo";
var b = -3 * 0;
Object.is( a, NaN ); // true
Object.is( b, -0 ); // true
Object.is( b, 0 );  // false
//polyfill
if (!Object.is) {
    Object.is = function (v1, v2) {
        // 判断是否是-0
        if (v1 === 0 && v2 === 0) {
            return 1 / v1 === 1 / v2;
        }
        // 判断是否是NaN 
        if (v1 !== v1) {
            return v2 !== v2;
        }
        // 其他情况
        return v1 === v2;
    };
}