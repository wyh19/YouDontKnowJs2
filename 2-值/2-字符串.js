// 字符串不可变是指字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符串。
// 而数组的成员函数都是在其原始值上进行操作

// 字符串借用数组的函数
var a = "foo";
var b = ["f", "o", "o"];
var c = Array.prototype.join.call(a, "-");
var d = Array.prototype.map.call(a, function (v) {
    return v.toUpperCase() + ".";
}).join("");
console.log(c)
console.log(d)

// !注意：数组的reverse函数，不可被字符串借用，因为这是数组的可变函数，会改变执行者本身，而字符串是不允许被可变函数执行的
//Array.prototype.reverse.call(a);
var e = a.split( "" ).reverse().join( "" );
console.log(e)