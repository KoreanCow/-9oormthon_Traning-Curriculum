export interface Car {
    id: number;
    name: string;
    brand: {
        popularity: number;
        logo: string;
        history: number;
    }
}