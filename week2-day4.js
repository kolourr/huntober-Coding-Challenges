// The Challenge - Day 4
// This week we'll be working with arrays toward a final puzzling result on Friday when we combine our daily functions. Your solutions should be built to work within any given daily constraints.

// Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.

// // for the less imaginative among us :)
// [[0,1,2],[3,4,5],[6,7,8]]

// // as a grid
// [
// [0,1,2],
// [3,4,5],
// [6,7,8]
// ]
// Still with me? I hope so! Today I need your help moving some things around again. I'm always rearranging.

// Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

// Oh, and go ahead and mutate the given array. We're livin' on the wild side!


// myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// // call move up function with 'h' and myGrid
// console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// // Note that 'h' is already as far up as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// // call move down function again, same arguments
// // Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]



function moveup(arr, val){

    let newArr = arr.map((item, index, arr) => {
        if(item.includes(val)){
           return [index,item.indexOf(val) ]
        }
    })
    let rowIndex = newArr.filter(item => Array.isArray(item)).flat()

    if(rowIndex[0] > 0){
        arr[rowIndex[0]][rowIndex[1]] = arr[rowIndex[0] - 1][rowIndex[1]]
        arr[rowIndex[0] -1][rowIndex[1]] = val

    }
    return arr

}


function movedown(arr, val){

    let newArr = arr.map((item, index, arr) => {
        if(item.includes(val)){
           return [index,item.indexOf(val) ]
        }
    })
    let rowIndex = newArr.filter(item => Array.isArray(item)).flat()

    if(rowIndex[0] < arr.length - 1){
        arr[rowIndex[0]][rowIndex[1]] = arr[rowIndex[0] + 1][rowIndex[1]]
        arr[rowIndex[0] + 1][rowIndex[1]] = val

    }
    return arr}





myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

console.log(moveup(myGrid, 'h'))
console.log(moveup(myGrid, 'h'))
console.log(moveup(myGrid, 'h'))
console.log(movedown(myGrid, 'f'))
console.log(movedown(myGrid, 'f'))
