// 현재 사용자의 구성 값
type AppConfig = {
    username: string;
    email: string;
};

// 사용자에게 구성 값을 변경할 수 있는 권한이 있는지 여부
type AppPermissions = {
    changeUsername: boolean;
    changeEmail: boolean;
};

[1, 2, 3].map(value => value.toString());
// ["1", "2", "3"]

// type Users = 'John' | 'Han' | 'Kim';

// // type UserFirstNames = { [K in Users]: string };
// const userFirstNameInfo: UserFirstNames = {
//     John: 'Doe',
//     Han: "Ho",  
//     Kim: "jun",
// }

// type UserFirstNames = {
//     John: string,
//     Han: string,
//     Kim: string,
// }

// type Users = 'John' | 'Han' | 'Kim';

// // type UserAge = { [K in Users]: number };
// const userAgeInfo: UserAge = {
//     John: 10,
//     Han: 20,
//     Kim: 30,
// }

// type UserAge = {
//     John: number,
//     Han: number,
//     Kim: number,
// }


// type DeviceFormatter<T> = {
//     [K in keyof T]: T[K];
// }

// type Device = {
//     manufacturer: string;
//     price: number;
// };

const iphone: DeviceFormatter<Device> = { manufacturer: 'apple', price: 100 };

type DeviceFormatter<T> = {
    [K in keyof T]?: T[K];
}

type Device = {
    manufacturer?: string;
    price?: number;
};

const priceOnly: DeviceFormatter<Device> = { price: 23 };
const manufacturerOnly: DeviceFormatter<Device> = { manufacturer: 'apple' };
const empty: DeviceFormatter<Device> = {};
