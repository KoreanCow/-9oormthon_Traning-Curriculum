"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = 'Doe';
// Array
// 한가지 타입만 가지는 배열
let names1 = ['John', 'Kim'];
let names2 = ['John', 'Kim'];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
// 여러 타입을 단언 X any 
let someArray = ['John', 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// stringArray.push('C');
// numberArray[0] = 3;
// Tuple
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a']
let users;
users = [[1, 'John'], [2, 'Doe']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
tuple2.push(false);
// any
let any = 'abc';
any = 1;
any = [];
// unknown
let unknown = false;
let string1 = unknown;
let string2 = unknown;
// Object 
let obj = {};
let arr = [];
let nul = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1',
    description: 'description1',
};
// Union
let union;
union = 'hi';
union = 123;
union = [];
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
// Null, Undefined
let number1 = undefined;
let string9 = null;
let object = undefined;
let array = null;
let undefined1 = null;
let null1 = undefined;
let void1 = null;
let void2 = undefined;
// void
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi); // undefined
// never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = [];
never.push(1);
