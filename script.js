'use strict';

const options = {
    name: 'Test',
    width: 1024,
    colors: {
        border: 'black',
        bg: "red"
    }
};
// это что бы перебрать Обьект в обьекте
// for (let key in options) {
//     if (typeof (options[key]) === 'object')
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} : ${options[key][i]}`);
//         } else {

//             console.log(`Свойство ${key} : ${options[key]}`);
//         }
// }

// const ob = Object.keys(options).length;
// console.log(ob)
function sortingNum(a, b) {
    return a - b;
}

const sortNum = [2, 8, 1, 15, 3, 18, 4];
console.log(sortNum);

sortNum.sort(sortingNum);
console.log(sortNum.sort(sortingNum));