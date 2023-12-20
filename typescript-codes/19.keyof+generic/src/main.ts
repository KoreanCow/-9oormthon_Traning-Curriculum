interface Person {
    name: string;
    age: number;
    address: string;
}

const person: Person = {
    name: 'John',
    age: 30,
    address: 'Seoul'
}

const age = getProperty(person, 'age');  //30
// const name = getProperty(person, 'name');  //John
// const invalid = getProperty(person, 'invalid');  //Error

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}