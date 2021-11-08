// TASK 1

let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam']

let newWords = words.reduce((previousValue, currentValue) => {
    return previousValue + ' ' + currentValue.toUpperCase()
}, words)

console.log(newWords)

// TASK 2

// let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']
// let result = words.filter(words => words.includes('m') || words.includes('M'));
// console.log(result)


// TASK 3

// let users = [
//     {name: 'giorgi', age: 16},
//     {name: 'levani', age: 90},
//     {name: 'nino', age: 30},
//     {name: 'otari', age: 11},
//     {name: 'mari', age: 28}
// ]

// VARIANT 1

// let ageFilter = []
//
// users.map(function (users) {
//     if (users.age > 18) {
//         ageFilter.push(users.name)
//     }
// })
//
// console.log(ageFilter)

// VARIANT 2

// let ageFilter = []
//
// users.filter(function (users) {
//     if (users.age > 18) {
//         ageFilter.push(users.name)
//     }
// })
//
// console.log(ageFilter)


// TASK 4

// let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing']
// let itemsFunction = []
//
// items.map(function (items) {
//     if (typeof items === "number"){
//         itemsFunction.push(items * items)
//     } else if (typeof items === "string") {
//         itemsFunction.push(items.toUpperCase())
//     } else {
//         itemsFunction.push(items)
//     }
// })
//
// console.log(itemsFunction)