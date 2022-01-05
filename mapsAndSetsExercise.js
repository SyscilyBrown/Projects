// Quick Question #1
// What does the following code return?

const prac = new Set([1,1,2,2,3,4]) // {1, 2, 3 ,4}


// Quick Question #2
// What does the following code return?

const prac2 = [...new Set("referee")].join("") // 'ref'


// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true); 
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}
//


// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
//if the size of the new set that removes duplicates is not the same length as the arr 
const hasDuplicate = arr => new Set(arr).size !== arr.length
  
   
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


// // vowelCount
// // Write a function called vowelCount which accepts a string and returns a map where the keys are letters and the values are the count of the vowels in the string.

const vowels = char => ( "aieou".includes(char))


function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      //if the lowercasechar exists in vowels
      if(vowels(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
            //set vowelMap with a key of the lowercasechar and a value of the value of lowercasecharacter +1 if it already exists
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
            //set the value to one if it doesn't already exist (line 46)
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
return vowelMap;
}
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1//