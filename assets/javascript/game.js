// Start the game by having the computer pick a random number between 19-120
// Use math.floor - math. random to do this
// Then Display the number on the screen


$( document ).ready(function(){
    var numToHit=Math.floor(Math.random()*101+19)
    $("#number-to-reach").text(numToHit);
    console.log(numToHit);





// Set up global variables for keeping score

var playerScore = 0;
var wins = 0;
var losses = 0;


// Create a resest function that will will keep the wins and losses total but set the player score back to zero
// It will also generate a new random numToHit



function resetCompNum () {
     
    numToHit=Math.floor(Math.random()*101+19)
    $("#number-to-reach").text(numToHit);

    playerScore = 0;
    
}









// Generate random numbers for each of the 4 crystals between so that they are between 1-12
// Use this code to do this -- Math.floor(Math.random() * (max - min + 1)) + min;
// Set the randoms #'s of the crystals and add their values to the total clicked




var firstCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$('#crystal-1').on("click", function() {

    
    playerScore = playerScore + firstCrystal;
    $('#yourScore').text(playerScore);
    
    if (playerScore == numToHit) {
        wins ++
        resetCompNum();
        firstCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    
}   if (playerScore > numToHit) {
        losses ++
        resetCompNum();
        firstCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    

}    $('#howManyWins').text(wins);
     $('#howManyLosses').text(losses);
    
})
var secondCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$('#crystal-2').on("click", function() {
    playerScore = playerScore + secondCrystal;
    $('#yourScore').text(playerScore);

    if (playerScore == numToHit) {
        wins ++
        resetCompNum();
        secondCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        
    }   if (playerScore > numToHit) {
        losses ++
        resetCompNum();
        secondCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    }  
    
    $('#howManyWins').text(wins);
    $('#howManyLosses').text(losses);
})
var thirdCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$('#crystal-3').on("click", function() {
    playerScore = playerScore + thirdCrystal;
    $('#yourScore').text(playerScore);

    if (playerScore == numToHit) {
        wins ++
        resetCompNum();
        thirdCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        
    }   if (playerScore > numToHit) {
        losses ++
        resetCompNum();
        thirdCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        
    }  

    $('#howManyWins').text(wins);
    $('#howManyLosses').text(losses);
    
})
var fourthCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
$('#crystal-4').on("click", function() {
    playerScore = playerScore + fourthCrystal;
    $('#yourScore').text(playerScore);

    if (playerScore == numToHit) {
        wins ++
        resetCompNum();
        fourthCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        
    }   if (playerScore > numToHit) {
        losses ++
        resetCompNum();
        fourthCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        
    }  

    
    $('#howManyWins').text(wins);
    $('#howManyLosses').text(losses);
  
})





// Set function for updating wins and losses








// Create an imgageCrystal for each iteration

// var imgCrystal = $("<img/>");

// Give the crystals a class ".crystal-image"

// imageCrystal.addClass("crystal-image");


// // Give each imageCrystal a link for an image by using the .attr

// imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

// // Give each imageCrystal a data attribute calle data-crystalValue
// // Set the data attribute to the random number assigned to the crystal

// imageCrystal.attr("data-crystalValue", firstCrystal);

// // Display the images of the crystals

// $("#crystals").append(imageCrystals);


})
