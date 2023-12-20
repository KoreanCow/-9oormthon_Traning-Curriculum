type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 2],
    platypus: 'haha'
} satisfies Record<string, string | RGB>


const redComponent = palette.red.at(0);

const greenNormalized = palette.green.toUpperCase();