// // function getArrayLength(arr: number[] | string[] | boolean[]): number {
// //     return arr.length;
// // }

// function getArrayLength<T>(arr: T[]): number {
//     return arr.length;
// }

// const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c"];
// const array3 = [true, false, true];

// getArrayLength<number>(array1);
// getArrayLength<string>(array2);
// getArrayLength<boolean>(array3);


// interface Vehicle<T> {
//     name: string;
//     color: string;
//     option: T;
// }

// const car: Vehicle<{ price: number }> = {
//     name: 'Car',
//     color: 'red',
//     option: {
//         price: 1000
//     }
// }

// const bike: Vehicle<boolean> = {
//     name: 'Bike',
//     color: 'green',
//     option: true
// }

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const array = makeArr<number, number>(4, 5);
const array = makeArr<string, string>("a", "b");


const makeArr1 = <X, Y = string>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const array1 = makeArr1<string>("a", "b");


const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

makeFullName({ firstName: "John", lastName: "Doe", location: 'Seoul' })
makeFullName({ firstName: "John", lastName: "Doe", hello: 'Greeting' })


