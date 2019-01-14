// Run this program by navigating to it in terminal/bash.
// Then run  node bowlingGame.js"

//declare each player's throws as a  variable
var p1 = "X-X-X-X-X-X-X-X-X-X-XX";
var p2 = "45-54-36-27-09-63-81-18-90-72";
var p3 = "5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5";
var p4 = "45-54-36-27-09-63-81-18-90-7/-5";
var p5 = "4/-34-X-23-2/-X-32-X-13-46";

//create an array of the players 
var party = [p1, p2, p3, p4, p5];

//starting frame #
var frame = 1;
//starting score #
var score = 0;


function game () {
    //split the string of  throws on  each '-' to divide it into an array of frames for the selected player
    var frameArray = party[x].split("-");

    //loop over the frame Array to score the game , accounting for an extra "frame "of bonus throws to be counted in  frame 10 in case of a strike or spare. 
    for (i = 0; i < 10; i++) {

        //if the player threw a strike...
        if (frameArray[i].charAt(0) === "X") {
            //create number variables for the value of the next 2 throws.  use the number function to change the variable value of the characters at index 0 and 1 of the next frame in the frameArray from a string to an integer.   if it's not a number, make it a 10 ( as it's a / for spare or an x for a strike)
            var a = Number(frameArray[i + 1].charAt(0)) || 10;
            var b = Number(frameArray[i + 1].charAt(1)) || 10;

            //increase the score by 10 + the value of the next 2 throws
            score += 10 + a + b;
           
            //increase the frame by 1
            frame++;

        //If the player threw a spare...
        } else if (frameArray[i].charAt(1) === "/") {
            // create number variables for the value of the next throw. use the number function to change the variable value of the characters at index 0 of the next frame in the  frameArray from a string to an integer.  if the character at index 0 is not a number, make it a 10 - it was a strike. 
            var a = Number(frameArray[i + 1].charAt(0)) || 10;

             //increase the score by 10 + the value of the next throw
            score += 10 + a;
            
            //increase the frame by 1
            frame++;
        
        // if the player threw an open frame...
        } else {
            // create number variables for the value of the throw. use the number function to change the variable value of the characters at index 0 and 1 of the current frame  in the frameArray  from a string to an integer. 
            var a = Number(frameArray[i ].charAt(0));
            var b = Number(frameArray[i].charAt(1));

        //add the integers
            score += a + b;
    
        //increase the frame by 1
        frame++;
    }
    }

    //print the array of frames  for each player and their final score 
    console.log("Player " +  (x+1) + " Threw: " + frameArray + "\n Final score: " + score + "\n ");

    //reset the score to 0
    score = 0;
    };    
    
//run the game function for each player in the party
for (var x = 0; x < party.length; x++) {
    game( party[x]);
}
