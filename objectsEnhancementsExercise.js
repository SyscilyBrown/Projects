
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

  /*  Write an ES2015 Version */
  function createInstructor(firstName, lastName){
      return {
          firstName,
          lastName
      }
  }



//   //2
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */
let favoriteNumber = 42
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}




//3
// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise
        }
        
    }
}