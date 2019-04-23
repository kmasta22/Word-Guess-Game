



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



//elements from html
var songNameElement = document.getElementById("songName");
var artistNameElement = document.getElementById("artistName");
var numberOfWinsElement = document.getElementById("numberOfWinsText");
var numberOfGuessesElement = document.getElementById("numberOfGuessesText"); 
var lettersAlreadyGuessed = document.getElementById("lettersAlreadyGuessedText");


//set number of guesses remaining to 15 at beginning of a game
var numberofGuessesRemaining = 15;

numberOfGuessesElement.innerHTML = "Number of Guesses Remaining: " + numberofGuessesRemaining;


//find a random song from the songArray and save it as randomSong
var randomSong = songArray[Math.floor(Math.random()*songArray.length)]

//split the randomSong into an array of characters
var wordArray = randomSong.split("");

//gives the index of the item in the random song index
var indexOfRandomSong = songArray.indexOf(randomSong);

//gives the matching artist name for the song that is at the index of random song
var matchingArtistName = artistArray[indexOfRandomSong];

//empty array to push underscores onto
var underscoreArray = [];

//empty array for letters already guessed

var lettersAlreadyGuessedArray = [];

//testing
console.log(indexOfRandomSong);
console.log(randomSong);
console.log(matchingArtistName);
console.log(wordArray);



//find the artist name element and change its content to the matching Artist name for the random song generated at page load
artistNameElement.innerHTML = (matchingArtistName);

//loop goes for as long as the wordArray
//it takes each index of the wordArray which is random song that was split into characters and tests whether
//the character at each index is a space or a letter
//if it is a space it pushes a SPACE into the underscore array that appears on the screen
//if it is not a space then it must be a letter so it pushes an underscore
//after it pushes the space or letter onto the array it uses the join function to make it into a string at the songNameElement on the screen
for (i=0; i < wordArray.length; i++){

        var letterAsLowercase = wordArray[i].toLowerCase();

        console.log(letterAsLowercase);

        if(letterAsLowercase === " "){

            console.log("this is a space");
            underscoreArray.push(" ");
            songNameElement.innerHTML = underscoreArray.join("");
            

        }

        else{

            console.log("key is equal to letter")
            underscoreArray.push("_");
            songNameElement.innerHTML = underscoreArray.join("");
            

        }
                   
}

//capture letter press
document.onkeyup = function (event) {

letter = event.key;
letter = letter.toLowerCase();


//push the letter pressed onto an array for lettersAlreadyGuessed and then print the array to the screen
lettersAlreadyGuessedArray.push(letter);
lettersAlreadyGuessed.innerHTML = "Letters Already Guessed: " + lettersAlreadyGuessedArray.join("");



//AFTER KEY PRESS loop through word array, convert each letter to lowercase
//then check to see if the letter at the current index of the array equals the letter saved on the key press
//if it equals it then use the function splice to replace the underscore at the current index (i) of the loop
//if it does not equal then reduce number of guesses remaining
    for (i=0; i < wordArray.length; i++){

        letterAsLowercase = wordArray[i].toLowerCase();
        
            

                
            if (letter == letterAsLowercase){

                     underscoreArray.splice(i, 1, letter);

                     songNameElement.innerHTML = underscoreArray.join("");


                     
                 }
       
       
        else {

                numberofGuessesRemaining = numberofGuessesRemaining - 1;
                numberOfGuessesElement.innerHTML = "Number of Guesses Remaining: " + numberofGuessesRemaining;

                if(numberOfGuessesRemaining = 0){

                    alert("Oops, you've downloaded a virus.");

                    }

                


             }


        


        }

    }



   });



