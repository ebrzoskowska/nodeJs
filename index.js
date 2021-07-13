// here we require the fs module
const fs = require("fs");
// or import { readFileSync, writeFile } from "fs";

// here we require yargs
const yargs = require("yargs");

// here we require input from user
const prompt = require('prompt-sync')();

const command = process.argv[2];

// an empty movie list
let movieList;

try {
    let tempJson = fs.readFileSync("./movies.json");
    movieList = JSON.parse(tempJson);   
} catch (error) {
    movieList = [];
}

// this function will add movie to the movie list if 2 index place of command process will contain word
// 'add' and to call this function we use command 'npm[0 index] start[1 index] add[2 index] ...movie
const add = () => {
  if (command === "add") {
    tempMovie = { movie: yargs.argv.movie};
    // tempMovie = {movie: process.argv[3]};
    movieList.push(tempMovie);
    let stringMovieList = JSON.stringify(movieList, null, 1);
    fs.writeFile("./movies.json", stringMovieList, finished);
    function finished(err) {
        console.log('all set')
    }
  }
};

add();

//Read File --> Change data to object --> Manipulate object --> Change data to json --> Write data to file
const del = () => {
  if (command === "del") {  
    const name = prompt('Pass title of a movie you want to delete: ');     
    for (let [i, elm] of movieList.entries()) {
      if (elm.movie == `${name}`) {
        movieList.splice(i, 1);
        let stringMovieList = JSON.stringify(movieList, null, 1);
        fs.writeFile("./movies.json", stringMovieList, finished);
          function finished(err) {
            console.log('all deleted')
        }
      }
    }
  }
};

del();

// function to edit data in json file
const edt = () => {
  if (command === "edt") {  
    const idIndexNumber = prompt('Pass number of a movie you want to edit (start from 0): '); 
    const oldMovieTitle = prompt('Pass title of a movie you want to edit: ');    

    for (i = 0; i < movieList.length; i++) 
    {            
      if(movieList[idIndexNumber].movie == oldMovieTitle) {
        const userData = prompt('Pass new title of a movie: '); 
        let tempUserData = {movie: userData};
        movieList[idIndexNumber] = tempUserData;
        let stringMovieList = JSON.stringify(movieList, null, 1);
        fs.writeFile("./movies.json", stringMovieList, finished);
          function finished(err) {
            console.log('all edited')
        }
      }    
    }
  }
};

edt();













 








