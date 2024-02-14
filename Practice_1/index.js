
const fruits = [["apple","orange",2,"pear","pineapple","coconut","mango"], ["strawberry", "raspberry"]]
let fruit = "grape"
/* 
fruits.forEach(f => {
    console.log(f)
});

for (let fruit of fruits) {
    console.log("second_" + fruit)
} 
*/

function myFunction(fruit) {
    console.log(fruit)
}

myFunction(fruit)

// console.log(fruits.every(d => typeof(d) === 'string'))
// console.log(fruits.some(d => typeof(d) === 'number'))

// console.log(fruits.filter(d => typeof(d) === "number"))
// console.log(fruits.map(d => typeof(d)))

let movies = [{
    "title": "Stargate - Original series",
    "length": "45:00",
    "year": 1996,
    "director": "Direct Ores",
    "actors": ["Richard Dean Anderson","fdsfsd"]
},{
    "title": "Stargate - Original series",
    "length": "45:00",
    "year": 1996,
    "director": "Direct Ores",
    "actors": ["Richard Dean Anderson","fdsfsd"]
},{
    "title": "Stargate - Original series",
    "length": "45:00",
    "year": 1996,
    "director": "Direct Ores",
    "actors": ["Richard Dean Anderson","fdsfsd"]
},{
    "title": "Stargate - Original series",
    "length": "45:00",
    "year": 1996,
    "director": "Direct Ores",
    "actors": ["Richard Dean Anderson","fdsfsd"]
}
]

//A) List of movies(title - year)
//B) Movie with Richard Dean Anderson
//C) Which is the longest movie

