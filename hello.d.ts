declare function sayHello(person: string): string;
declare let user: string;
declare let anyThing: any;
declare let myF: string | number;
interface Person {
    readonly id: number;
    name: string;
    age: number;
    fuck?: string;
    [propName: string]: any;
}
declare let tom: Person;
declare function sum(params: number, ...items: any[]): number;
declare function reverse(x: number | string): number | string;
declare enum Days {
    Sun = 7,
    Mon = 1,
    Tue = 2,
    Wed = 3,
    Thu = 4,
    Fri = 5,
    Sat = 6
}
