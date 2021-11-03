// TASK 1

// let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= 5) {
//         console.log(arr[i])
//     }
// }


// TASK 2

// let arr = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         console.log(arr[i])
//     }
// }


// TASK 3

// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
//
// let arrObjects = arr[0].concat(arr[1], arr[2])
//
// for (let i = 0; i < arrObjects.length; i++) {
//     if(arrObjects[i] > 0) {
//         console.log(arrObjects[i])
//     }
// }


// TASK 3 Second Variant

// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
// let result = []
// arr.forEach(record => {
//     record.forEach(innerRecord => {
//         if (innerRecord > 0) {
//             result.push(innerRecord);
//         }
//     })
// });
// console.log(result.toString())


// TASK 3 Third Variant

// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
// let array = [];
// arr.map(item => {
//     item.map(number=> {
//         number > 0 ? array.push(number) : '';
//     })
// })
// console.log(array);