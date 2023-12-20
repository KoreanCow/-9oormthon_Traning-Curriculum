// document.addEventListener('click', (event) => {

// })

document.addEventListener('keypress', (event) => {

})

interface MyMouseEvent {
    x: number;
    y: number;
}

interface MyKeyBoardEvent {
    key: string;
}

interface MyEventObjects {
    click: MyMouseEvent;
    keypress: MyKeyBoardEvent;
}

function handleEvent<K extends keyof MyEventObjects>(
    eventName: K,
    callback: (e: MyEventObjects[keyof MyEventObjects]) => void
) {
    if (eventName === 'click') {
        callback({ x: 0, y: 0 });
    } else if (eventName === 'keypress') {
        callback({ key: 'Enter' });
    }
}

handleEvent('keypress', (e) => { })