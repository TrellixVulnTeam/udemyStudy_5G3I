'use strict';

const options = {
    name: 'Test',
    width: 1024,
    colors: {
        border: 'black',
        bg: "red"
    }
};

for (let key in options) {
    console.log(`Свойство ${key},`);
}