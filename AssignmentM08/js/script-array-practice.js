//STEP 1
// let moviesArray = ['Mad Max','Blade Runner','Die Hard', 'Dune','John Wick'];
// console.log(moviesArray[1]);

//STEP 2 
// let moviesArray = ['Mad Max','Blade Runner','Die Hard', 'Dune','John Wick'];
// let movies = new Array(5);
// for (let i = 0; i<movies.length; i++) {
//     movies[i] = moviesArray[i];
// }
// console.log(movies[0]);

//STEP 3 
// let moviesArray = ['Mad Max','Blade Runner','Die Hard', 'Dune','John Wick'];
// let movies = new Array(5);
// for (let i = 0; i<movies.length; i++) {
//     movies[i] = moviesArray[i];
// }
// movies.splice(2, 0, "Catch me if You Can");
// console.log(movies.length);

//STEP 4
// let moviesArray = [];
// moviesArray.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick');
// delete moviesArray[0];
// console.log(moviesArray);

//STEP 5
// let movies = [];
// movies.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick','Fast and Furious','Star Wars');
// for (let element in movies) {
//     console.log(movies[element]);
// }

//STEP 6
// let movies = [];
// movies.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick','Fast and Furious','Star Wars');
// for (let element of movies) {
//     console.log(element);
// }

//STEP 7
// let movies = [];
// movies.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick','Fast and Furious','Star Wars');
// movies = movies.sort();
// for (let element in movies) {
//     console.log(movies[element]);
// }

//STEP 8
// let movies = [];
// movies.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick','Fast and Furious','Star Wars');
// moviesIRegret = ['Dont Worry Darling','50 First Dates', 'Black Beauty'];

// console.log('Movies I like: \n\n')
// for (let element in movies) {
//     console.log(movies[element]);
// }

// console.log('\nMovies I regret watching: \n\n')
// for (let element in moviesIRegret) {
//     console.log(moviesIRegret[element]);
// }

//STEP 9
// let movies = [];
// movies.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick','Fast and Furious','Star Wars');
// moviesIRegret = ['Dont Worry Darling','50 First Dates', 'Black Beauty'];
// movies = movies.concat(moviesIRegret);
// movies = movies.sort();
// movies = movies.reverse();

// for (let element of movies) {
//     console.log(element);
// }

//STEP 10
// let movies = [];
// movies.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick','Fast and Furious','Star Wars');
// moviesIRegret = ['Dont Worry Darling','50 First Dates', 'Black Beauty'];
// movies = movies.concat(moviesIRegret);
// movies = movies.sort();
// movies = movies.reverse();
// lastElement = movies.pop();
// console.log(lastElement);

//STEP 11
// let movies = [];
// movies.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick','Fast and Furious','Star Wars');
// moviesIRegret = ['Dont Worry Darling','50 First Dates', 'Black Beauty'];
// movies = movies.concat(moviesIRegret);
// movies = movies.sort();
// movies = movies.reverse();
// firstElement = movies.shift();
// console.log(firstElement);

//STEP 12
// let movies = [];
// movies.push('Mad Max','Blade Runner','Die Hard', 'Dune','John Wick','Fast and Furious','Star Wars');
// moviesIRegret = ['Dont Worry Darling','50 First Dates', 'Black Beauty'];
// movies = movies.concat(moviesIRegret);
// let indices = [];
// for (movie in movies) {
//     if (moviesIRegret.includes(movies[movie])) {
//         indices.push(movie);
//     }
// }
// movies[indices[0]] = 'Dumb and Dumber';
// movies[indices[1]] = 'Dude Wheres My Car';
// movies[indices[2]] = 'Indiana Jones';
// console.log(movies);

//STEP 13
// movies = [["Star Wars", 1], ["Indiana Jones", 2], ["Blade Runner", 3], ["Mad Max", 4], ["John Wick", 5]];
// let movieNames = [];
// for (movie of movies) {
//     movieNames.push(movie.filter(item => typeof item === "string"));
// }
// console.log(movieNames);

//STEP 14
// let employees = ['Antonio','Ramon','Derek','Zak','George','Sally','Joe','Fred'];
// let showEmployees = function(param) {
//     for (employee of param) {
//         console.log(employee);
//     }
// };
// showEmployees(employees);

//STEP 15
// testArray = [58, '', 'abcd', true, null, false, 0]
// let filterFunction = function(inputArray) {
//     return inputArray.filter(item => item != "0" && item != false && item != null);
// }
// console.log(filterFunction(testArray));

//STEP 16
// let employees = ['Antonio','Ramon','Derek','Zak','George','Sally','Joe','Fred'];

// let randomValue = function(inputArray) {
//     random = Math.floor(Math.random() * inputArray.length);
//     return inputArray[random];
// }
// console.log(randomValue(employees));

//STEP 17
numArray = [-20, 0, -34, 45, 100, 112, 113];
let getLargest = function(inputArray) {
    largest = -Infinity;
    for (value of inputArray) {
        if (value > largest) {
            largest = value;
        }
    }
    return largest;
}
console.log(getLargest(numArray))