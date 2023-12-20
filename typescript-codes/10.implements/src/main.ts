class Car {
    mileage = 0;
    price = 100;
    color = 'white';

    drive() {
        return 'drive!';
    }

    brake() {
        return 'brake!';
    }
}

interface Part {
    seats: number;
    tire: number;
}

class Ford implements Car, Part {
    mileage = 1;
    price = 2;
    color = 'white';
    seats = 2;
    tire = 3;

    drive() {
        return 'drive!';
    }

    brake() {
        return 'brake!';
    }
}

const myFordCar = new Ford();


const user = {
    name: 'john',
    age: 20,
    address: 'seoul'
}

type UserKeys = keyof typeof user;