function fizzbuzz(n) {
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }
}

let number = 16

fizzbuzz(number)

// output - 1 2 fizz 4 buzz fizz 7 8 fizz buzz 13 14 fizzbuzz