"use strict"

// let uni0=document.getElementById("unicorn0")
// let uni0x=0  //Unicorn0's X position
// const finishLine = document.getElementById("finish")
// //finishLine.style.left = 80%;

// let uni1=document.getElementById("unicorn1")
// let uni1x=0

//Extra challenges .. Set the background colour of each unicorn .. (so they are different) .. ideally with Javascript (not CSS)
//Add a third unicorn - three horse race
// - What if we wanted 20 unicorns ??  []

let unicornDivs = []
let uniXs = []
let colors = "red, green, blue, pink, white, cyan, black, purple, magenta, orange".split(",")
const numberOfUnicorns = 10 

let i = 0
while (i<numberOfUnicorns){
    unicornDivs[i] = document.createElement("div")
    document.body.appendChild(unicornDivs[i])
    unicornDivs[i].classList.add("unicorn")
    unicornDivs[i].style.top = i * 6 + "%"
    unicornDivs[i].style.backgroundColor = colors[i]

    console.log(colors[1])

    //<div class = "unicorn"></div>

    uniXs[i] = 0
    i++
}
//setInterval(moveUnicorns,100)  //How fast the race is - smaller=faster

requestAnimationFrame(moveUnicorns)

function resetRace(){
    let i = 0
    while(i<numberOfUnicorns){
        uniXs[i]=0
        i++
    }
}

function moveUnicorns(){
    let i = 0
    while(i<numberOfUnicorns){
        unicornDivs[i].style.left = uniXs[i] + "%"
        uniXs[i] += Math.random()

        if (uniXs[i]>90){
            alert(`${colors[i]} wins the race`)
            resetRace()
        }
        i++
    }

    requestAnimationFrame(moveUnicorns)

    //Move all unicorns a random amount each
    //If a unicorn has crossed the finish line
        //Display winner
        // restart race    

    // finishLine.style.left =  90 + "%"
    // uni0.style.left= uni0x +"%"
    // uni1.style.left = uni1x + "%"

    // let random = Math.floor(Math.random() * 10)
    // let random2 = Math.random()
    // uni0x +=random //add 1% to the unicorns x position (Add a random amount instead)
    // uni1x +=random2

    // if (uni0x >= 90){
    //     alert("Unicorn 1 won")
    //     uni0x = 0
    //     uni1x = 0
    // } else if (uni1x >=90){
    //     alert("Unicorn 2 won")
    //     uni0x = 0
    //     uni1x = 0
    // }
}





