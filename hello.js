function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
var myF; // 联合属性只能访问类型共有的属性或方法
myF = "seven";
myF = 7;
var tom = {
    id: 1,
    name: 'Tom',
    age: 25,
    fuck: 'nobody',
    kill: 'nothing'
};
// 数组
// 类数组 不能用普通数组描述，应该用接口定义 常用类数组有自己的接口
function sum(params) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    var args = arguments;
    var res = 0;
    for (var index = 0; index < args.length; index++) {
        var element = args[index];
        res += element;
    }
    return res;
}
console.log(sum(3, 2));
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === "string") {
        return x.split('').reverse().join('');
    }
}
// 类型断言
// 强制类型转换 [value] as [type]
// 内置对象
// 字符串字面量 类似enum
// enum
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
