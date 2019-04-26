

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


var wins = 0;
var letterAsLowercase = 0;
var letter = 0;
var underscoreArray = [];
var lettersAlreadyGuessedArray = [];
var numberofGuessesRemaining = 15;
numberOfGuessesElement.innerHTML = "Number of Guesses Remaining: " + numberofGuessesRemaining;


//find a random song from the songArray and save it as randomSong
var randomSong = songArray[Math.floor(Math.random()*songArray.length)];

//split the randomSong into an array of characters
var wordArray = randomSong.split("");

//gives the index of the item in the random song index
var indexOfRandomSong = songArray.indexOf(randomSong);

//gives the matching artist name for the song that is at the index of random song
var matchingArtistName = artistArray[indexOfRandomSong];

//find the artist name element and change its content to the matching Artist name for the random song generated at page load
artistNameElement.innerHTML = (matchingArtistName);

//testing
console.log(indexOfRandomSong);
console.log(randomSong);
console.log(matchingArtistName);
console.log(wordArray);



//createUnderscores function has a For Loop that runs for the length of the wordArray
//it takes each index of the wordArray which is random song that was split into characters and tests whether
//the character at each index is a space or a letter
//if it is a space it pushes a SPACE into the underscore array that appears on the screen
//if it is not a space then it must be a letter so it pushes an underscore
//after it pushes the space or letter onto the array it uses the join function to make it into a string at the songNameElement on the screen



function createUnderscores(){


            for (i=0; i < wordArray.length; i++){

            letterAsLowercase = wordArray[i].toLowerCase();


             if(letterAsLowercase === " "){

                     underscoreArray.push(" ");
                     songNameElement.innerHTML = underscoreArray.join("");
            

              }

            else{

                     underscoreArray.push("_");
                     songNameElement.innerHTML = underscoreArray.join("");
            

              }
        }           
}


        //function captures keypress-saves it in letter variable-then pushes letter onto array and shows it on screen
        document.onkeyup = function (event) {


                letter = event.key;
                letter = letter.toLowerCase();
                isLetterCorrect(letter);


                lettersAlreadyGuessedArray.push(letter);
                lettersAlreadyGuessed.innerHTML = "Letters Already Guessed: " + lettersAlreadyGuessedArray.join("");

                if(numberofGuessesRemaining <= 1 ){

                    alert("Oops you've downloaded a virus");
                
                    restartGame();
                
                }
                
                else {
                    numberofGuessesRemaining--;
                    numberOfGuessesElement.innerHTML = "Number of Guesses Remaining: " + numberofGuessesRemaining;
                        
                }
                

        }

        
//AFTER KEY PRESS loop through word array, convert each letter to lowercase
//then check to see if the letter at the current index of the array equals the letter saved on the key press
//if it equals it then use the function splice to replace the underscore at the current index (i) of the loop
//if it does not equal then reduce number of guesses remaining
  function isLetterCorrect(letter){

                for (i=0; i < wordArray.length; i++){

                    letterAsLowercase = wordArray[i].toLowerCase();
        

                
                        if (letter == letterAsLowercase){

                                underscoreArray.splice(i, 1, letter);

                                songNameElement.innerHTML = underscoreArray.join("");
                                
                     
                          }

                        var array1 = underscoreArray.toString();
                        var array2 = wordArray.toString();
                        array2 = array2.toLowerCase();
            
                        if (array1 == array2){
                           
                                 alert("You win!");
                                 wins++;
                                 //change text of number of wins
                                 numberOfWinsElement.innerHTML = wins;

                                 restartGame();
                         }
                    }
       
                     
    }

    function restartGame(){


        numberofGuessesRemaining = 15;
        numberOfGuessesElement.innerHTML = "Number of Guesses Remaining: " + numberofGuessesRemaining;

        randomSong = songArray[Math.floor(Math.random()*songArray.length)];
        wordArray = randomSong.split("");
        indexOfRandomSong = songArray.indexOf(randomSong);
        matchingArtistName = artistArray[indexOfRandomSong];
        underscoreArray = [];
        lettersAlreadyGuessedArray = [];
        artistNameElement.innerHTML = (matchingArtistName);
        lettersAlreadyGuessed.innerHTML = "Letters Already Guessed: " ;
        numberOfWinsElement.innerHTML = "Wins: " + wins;

        createUnderscores();

    }

        
    restartGame();
    
        



   });



