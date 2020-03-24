function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

let myF: string | number; // 联合属性只能访问类型共有的属性或方法
myF = "seven";
myF = 7;

// 接口，对类的行为抽象，描述对象的形状shape
interface Person {
    readonly id: number;
    name: string;
    age: number;
    fuck?: string;
    [propName: string]: any; //一旦定义任意属性，那么其他属性和任意属性的类型必须是它的类型的子集
}

let tom: Person = {
    id: 1,
    name: 'Tom',
    age: 25,
    fuck: 'nobody',
    kill: 'nothing'
};

// 数组
// 类数组 不能用普通数组描述，应该用接口定义 常用类数组有自己的接口
function sum(params: number, ...items): number {
    let args: IArguments = arguments;
    let res: number = 0;
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        res += element;
    }
    return res;
}

console.log(sum(3, 2))

function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === "string") {
        return x.split('').reverse().join('');
    }
}

// 类型断言
// 强制类型转换 [value] as [type]

// 内置对象

// 字符串字面量 类似enum

// enum
enum Days { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat };
