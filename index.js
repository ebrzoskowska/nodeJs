// here we require the fs module
const fs = require("fs");

let movieList;

try {
  let tempJson = fs.readFileSync("./movies.json");
// let tempMovies = JSON.parse(tempJson);
// movieList.push(tempMovies);
    movieList = JSON.parse(tempJson);
    
} catch (error) {
    movieList = [];
}

// this function will add movie to the movie list if 2 index place of command process will contain word
// 'add' and to call this function we use command 'npm[0 index] start[1 index] add[2 index] ...movie
const add = () => {
  if (process.argv[2] === "add") {
    tempMovie = {movie: process.argv[3]};
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
const remove = () => {
    if (process.argv[2] === "delete") {
        movieList.splice(index, 1);
        let stringMovieList = JSON.stringify(movieList, null, 1);
        fs.writeFile("./movies.json", stringMovieList, finished);
        function finished(err) {
            console.log('all deleted')
        }
    }
  };

  remove();  

// function addWord(req, res) {
//     // Word and score
//     var word = req.params.word;
//     // Put it in the object
//     movieList[word] = score;
  
//     // Let the request know it's all set
//     var reply = {
//       status: 'success',
//       word: word,
//       score: score
//     }
//     console.log('adding: ' + JSON.stringify(reply));
  
//     // Write a file each time we get a new word
//     // This is kind of silly but it works
//     var json = JSON.stringify(words, null, 2);
//     fs.writeFile('words.json', json, 'utf8', finished);
//     function finished(err) {
//       console.log('Finished writing words.json');
//       // Don't send anything back until everything is done
//       res.send(reply);
//     }
//   }