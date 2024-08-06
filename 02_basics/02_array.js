const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] --> array can take any data
// console.log(marvel_heros[3][1]); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] --> merge the exiting array and give one array

const all_new_heros = [...marvel_heros, ...dc_heros] // ... --> it's called spread

// console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] --> same as concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat --> it will merge all array and concat all the elements in one array
console.log(real_another_array); // [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]


// Data Scrapping
Array.isArray("Shalini") // --> isArrray for asking question
console.log(Array.isArray("Shalini")) // --> false

// How will convert to array: 
console.log(Array.from("Shalini")) // from will help to convert : [
//     'S', 'h', 'a',
//     'l', 'i', 'n',
//     'i'
//   ]
