const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] --> array can take any data
// console.log(marvel_heros[3][1]); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] --> merge the exiting array and give one array

const all_new_heros = [...marvel_heros, ...dc_heros] // ... --> it's called spread

console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] --> same as concat
