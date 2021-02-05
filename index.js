

/* Ex.A
   Create a variable test that contains a string.
*/
const variablestring = "This is a string"
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/
const variable1 = 10;
const variable2 = 20;
const variablesum = variable1+variable2;

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/
const variablerandom = Math.floor((Math.random()*20)+1);
console.log(variablerandom);

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
const variableme = {
    name: "HafiZ",
    surname: "Ali",
    age: 30
}
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete variableme.age;

/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/
variableme.skills

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/
variableme.skills = "skills"
console.log(variableme); 
// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
function dice(randomizeinteger) {
    return console.log(randomizeinteger = Math.floor((Math.random()*10)+1));
}
dice(5);
/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
// function whoisbigger(number1, number2) {
//      if (number1 > number2 || number2> number1) {
//          console.log(>)
//      }
//     // number1 > number2 ? console.log(number2) : console.log(number1)
// }
// whoisbigger(20,15);

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/
function splitMe(stringToArray) {
    let givenString = stringToArray.split(" ");
    return console.log(givenString);
    
}
// splitMe("I love coding");
/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/
function deleteOne(stringandBoolean) {
    
    if (typeof stringandBoolean === `string`){
        let cuttingFirstLetter = stringandBoolean.slice(1)
        return console.log(cuttingFirstLetter)
    }
    else{
        let cuttingLastLetter = stringandBoolean.toString().split('').slice(0, -1).join('')
        return console.log(cuttingLastLetter)
    }
}
// deleteOne("am a king");
/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

function onlyLetters(receivesString) {
    let numberToString = receivesString.replace(/\d+/g, '');
    return console.log(numberToString);    
}
// onlyLetters("I am 1234 here")

/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/
function isThisAnEmail(emailString) {
    if (emailString.match("@")) {
        return console.log("Yes it is an email")
    }
    else{
        return console.log("Please enter the email address with @")
    }
    
}
// isThisAnEmail("aliks.om")
/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/
function whatDayIsIt() {
    var toDayDate = new Date();
    var toDaynumber = toDayDate.getDay()
    return console.log(toDayDate+ " " +  toDaynumber)
  }
  whatDayIsIt();
/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
const rollTheDices = function(n){
    let obj = {
        sum1 : 0,
        values : [],
    }
    obj.values.length = n
    for (let i = 0; i === n; i++) {
        let dice = Math.floor(Math.random() * 6) + 1
        obj.sum1 = (obj.sum1 + dice)
    }
    return obj
}
console.log(rollTheDices(5))

/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/

function howManyDays(givenDate) {
    let toDayDate = new Date();  //today date 
    const totalDays = Math.abs(givenDate - toDayDate) // date would be minus
    return console.log (totalDays / (1000 * 60 * 60 * 24));
}
howManyDays('02/04/2021');
    



/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/

function isToMyBDay(giveTheDate) {
    if (giveTheDate === "27.01.1989"){
        return console.log(true)
    }
    else{
        return console.log(false)
    }
}
isToMyBDay("27.02.1989");

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/
function deleteProp(deletingObject) {
    let givenObect = deletingObject
    delete deletingObject.name
    return console.log(givenObect)
    
}
deleteProp({name: "Ali", age: 30});
/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

function olderMovie(oldmovie) {
    return oldmovie.Year < 1970;
}

console.log(movies.find(olderMovie));

/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/

function countMovies() {
    return console.log(movies.length);
}
countMovies(Array);
/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/

function onlyTitles(movies) {
//    const titles =[]
//    for(let i =0; i<movies.length; i++) {
//        titles.push(movies[i].Title)
//    }
//    console.log(titles)
const titles = movies.map(movie =>movie.Title )
console.log(titles)

}
onlyTitles(movies);

/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/
function OnlyThisMillennium(movies) {
const thisdecades = []
for (let i=0; i<movies.length; i++){
    thisdecades.push(movies[i].Year)
}
console.log(thisdecades)
}

OnlyThisMillennium(movies);
/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/


/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/

/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/

/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/



/* Movies array is an example array, used for the exs. Don't change it :)  */
// const movies = [
//     {
//       Title: "The Lord of the Rings: The Fellowship of the Ring",
//       Year: "2001",
//       imdbID: "tt0120737",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     },
//     {
//       Title: "The Lord of the Rings: The Return of the King",
//       Year: "2003",
//       imdbID: "tt0167260",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
//     },
//     {
//       Title: "The Lord of the Rings: The Two Towers",
//       Year: "2002",
//       imdbID: "tt0167261",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
//     },
//     {
//       Title: "Lord of War",
//       Year: "2005",
//       imdbID: "tt0399295",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
//     },
//     {
//       Title: "Lords of Dogtown",
//       Year: "2005",
//       imdbID: "tt0355702",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
//     },
//     {
//       Title: "The Lord of the Rings",
//       Year: "1978",
//       imdbID: "tt0077869",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
//     },
//     {
//       Title: "Lord of the Flies",
//       Year: "1990",
//       imdbID: "tt0100054",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
//     },
//     {
//       Title: "The Lords of Salem",
//       Year: "2012",
//       imdbID: "tt1731697",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
//     },
//     {
//       Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
//       Year: "1984",
//       imdbID: "tt0087365",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
//     },
//     {
//       Title: "Lord of the Flies",
//       Year: "1963",
//       imdbID: "tt0057261",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
//     },
//     {
//       Title: "The Avengers",
//       Year: "2012",
//       imdbID: "tt0848228",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//     },
//     {
//       Title: "Avengers: Infinity War",
//       Year: "2018",
//       imdbID: "tt4154756",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
//     },
//     {
//       Title: "Avengers: Age of Ultron",
//       Year: "2015",
//       imdbID: "tt2395427",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
//     },
//     {
//       Title: "Avengers: Endgame",
//       Year: "2019",
//       imdbID: "tt4154796",
//       Type: "movie",
//       Poster:
//         "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
//     },
//   ]