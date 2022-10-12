// 🏆 The Challenge - Day 2
// This week we'll be working with arrays toward a final puzzling result on Friday when we combine our daily functions. Your solutions should be built to work within any given daily constraints.

// So it turns out that some of the information I stored ever-so-safely in arrays just isn't looking right. I'm not going to be happy until it feels right, you know what I mean? Could you help me rearrange things a bit?

// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The given primitive value will only occur once in the array
// The array passed in should be mutated by this function. Scandalous, I know.
// Example:

// myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// // call move left function with 'xyz' and myArray as arguments
// console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// // call move left function again, same arguments
// // Note that 'xyz' is already as far left as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// // call move right function this time, with 2 and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// // call move right function again, same arguments
// // Note that 2 is already as far right as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change


function moveLeft(arr, value){
    let val = arr.indexOf(value)
    if(val === 0) return 'No Change'
    arr.splice(val, 1)
    arr.splice(val-1, 0, value)
    return arr
}

function moveRight(arr, value){
    let val = arr.indexOf(value)
    if(val === arr.length - 1) return 'No Change'
    arr.splice(val, 1)
    arr.splice(val+1, 1, value)
    return arr
}

myArray = ['abc', 'xyz', 1, 2, 'Hey!']
console.log(moveLeft(myArray, 'xyz'))
console.log(moveLeft(myArray, 'xyz'))
console.log(moveRight(myArray, 2))
console.log(moveRight(myArray, 2))

