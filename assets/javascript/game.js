



//song index: 
//   [0] wonderwall - oasis 
//   [1] i want you back- n'sync
//   [2] sexandcandy -marcy playground
//   [3] tubthumping -chumbawumba
//   [4] friday im in love - the cure
//   [5] the sign - ace of base
//   [6] lovefool - the cardigans
//   [7] kiss from a rose - seal
//   [8] truly madly deeply - savage garden
//   [9] my heart will go on - celine dion
//   [10] all my life - KC & Jo Jo
//   [11] Baby one more time - Britney Spears
//   [12] Girl on TV - LFO

document.addEventListener('DOMContentLoaded', function(){
    

var songArray = ["Wonderwall", "I Want You Back", "Sex and Candy", "Tubthumping", "Friday Im In Love", "The Sign", "Love Fool", "Kiss from a Rose", 
"Truly Madly Deeply", "My Heart Will Go On", "All My Life", "Baby One More Time", "Girl On TV"];

var artistArray = ["Oasis", "N'Sync", "Marcy Playground", "Chumbawumba", "The Cure", "Ace of Base", "The Cardigans", "Seal",
 "Savage Garden", "Celine Dion", "KC & Jo Jo", "Britney Spears", "LFO"];

var songAudioFile = ["wonderwall.mp3", "iwantyouback.mp3", "sexandcandy.mp3", "tubthumping.mp3", "fridayiminlove.mp3", "thesign.mp3", "lovefool.mp3", "kissfromarose.mp3",
"trulymadlydeeply.mp3", "myheartwillgoon.mp3", "allmylife.mp3", "babyonemoretime.mp3", "girlontv.mp3"];




var songNameElement = document.getElementById("songName");
var artistNameElement = document.getElementById("artistName");
var numberOfWins = document.getElementById("numberOfWinsText");
var numberOfGuesses = document.getElementById("numberofGuessesText");
var lettersAlreadyGuessed = document.getElementById("lettersAlreadyGuessedText");





// when the page loads, I want the underscores to be put into the HTML Element "songName" dynamically using a for loop
//I receive the song to create the underscores from the songArray and assigned to the variable random song -> this is already done
// also i want the artist name that is at the same index number as the song name chosen by random, will display under the html element ID "artistName" 
//i need to create a document onkeyup event that records the key presses 
//i need to check each key press to see if it matches the word chosen and stored as "random song" 
//if the letter matches one of the letters in the randomSong string array then that letter gets pushed into the html dynamically 
//and replaces the underscore in that location and the counter on wins goes up
//if it does not match then the counter on losses goes up 
//there will be a max number of guesses allowed, and when the key presses are over that number there will be an alert that says "Sorry you've downloaded a virus"
//if they player guesses the word right before the max number of guesses is reached, then they will receive an alert that says "you've downloaded [] song"
//it will show them the name of the song from the array, the artist name and it will play the audio file that i've already saved in the folder
//i included an array of audio files because i was planning on referencing the song in the array that matches the index # of the songname once they "Win" that round
//i know there is a way to do this using an array of objects but I thought this would be easier to comprehend


//create a function here that changes the html dynamically for songName, splits the songname into an array so you can check what characters are in it

var randomSong = songArray[Math.floor(Math.random()*songArray.length)]

var wordArray = randomSong.split("");

var indexOfRandomSong = songArray.indexOf(randomSong);

var matchingArtistName = artistArray[indexOfRandomSong];

console.log(indexOfRandomSong);
console.log(randomSong);
console.log(matchingArtistName);
console.log(wordArray);


for (i=0; i < wordArray.length; i++){

        letterAsLowercase = wordArray[i].toLowerCase();

        console.log(letterAsLowercase);

        if(letterAsLowercase === ("a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z")){

        console.log("this is a letter");

        //songNameElement.innerHTML = ("_ ");  

        artistNameElement.innerHTML = (matchingArtistName);

        }
        else if(wordArray.includes(" ")){
            console.log("this is a space");
           songNameElement.innerHTML =(" ");
        }


        
            
}

//onKeyUp assign key to letter variable and make it lowercase

document.onkeyup = function (event) {

letter = event.key;
letter = letter.toLowerCase();
randomSong = randomSong.toLowerCase();

            console.log(letter);


// if letter chosen is equal to a letter in the randomSong then print msg to console

      if (randomSong.includes(letter)){

            

            console.log("add letter dynamically to the html and increase score");


        }
        else{

            console.log("lose one point");

        }

    }

   });



