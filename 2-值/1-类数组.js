// 类数组就是类似数组的对象，常见的有 arguments、dom查询的nodeList等
//使用slice可以将类数组转化成真正的数组
function foo(){
    return Array.prototype.slice.call(arguments)
}

console.log(foo(1,2))