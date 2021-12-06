"use strict"


let uni0=document.getElementById("unicorn0")
let uni0x=0  //Unicorn0's X position


//Extra challenges .. Set the background colour of each unicorn .. (so they are different) .. ideally with Javascript (not CSS)
//Add a third unicorn - three horse race
// - What if we wanted 20 unicorns ??  []


setInterval(moveUnicorns,100)  //How fast the race is - smaller=faster


function moveUnicorns(){

    uni0.style.left= uni0x +"%"

    uni0x +=1  //add 1% to the unicorns x position (Add a random amount instead)
        
    //Move all unicorns a random amount each
    //If a unicorn has crossed the finish line
        //Display winner
        // restart race           

}





