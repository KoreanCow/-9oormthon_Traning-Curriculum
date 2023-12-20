type Properties = 'propA' | 'propB';

type MyNewType = MyMappedType<{ a: 'a', b: 'b' }>

type MyMappedType<T> = {
    [P in keyof T]: T[P];
}

// Pick,   Record 

// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };
// type Pick1<T, Properties extends keyof T> = {
//     [P in Properties]: T[P]
// }

// type MyNewType2 = Pick1<{ a: 'a', b: 'b', c: 'c' }, 'a'>

// Record 
// type Record1<K extends keyof any, T> = {
//     [P in K]: T;
// };


type Record1<K extends keyof any, T> = {
    [P in K]: T
}

const myNewRecord: Record1<string, number> = {};
myNewRecord.a = 10;
myNewRecord.b = 10;



