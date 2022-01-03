// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }


const filterOutOdds = (...args) => args.filter(v => v % 2 ===0) 

const findMin = (args) => Math.min(...args)

const mergeObjects = (arg1, arg2) => ({...obj1, ...obj2})

const doubleandReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//remove a random element in the items array and return a new array without that item 
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

//return a new array with every item in array 1 and 2 

const extend = (array1, array2) => {return [...array1, ...array2]}

/** Return a new object with a key removed. */

const removeKey = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    let newObj = {...obj1, obj2}
    return newObj
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}