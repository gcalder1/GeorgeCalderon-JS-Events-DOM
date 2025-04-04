//=====Browser Events=====//
document.addEventListener("DOMContentLoaded", function(){
    
    let onload = document.getElementById("onload");
    
    onload.innerHTML = "<h1>This is some loaded content</h1>"
});


//Keyboard Events
const directionEl = document.getElementById("direction");

document.addEventListener("keydown", function(event){
    console.log(event);

    directionEl.innerText = `The key that was pressed was ${event.key}`;

}); // shows the button pressed and displays text relative to the template literal

document.addEventListener("keyup", function(){
    directionEl.innerText = "";
}); // removes the text from key down


//++Click Event - For Exercise++//
const coolButton = document.getElementById("clickMe");

coolButton.addEventListener("click", function(event){
    coolButton.innerText = "You clicked me!";
    console.log(event);
});


//=====Event Handlers vs Event Listeners=====//
// function greet (){
//     console.log("Hello Cohort 2025");
// };


//++Event Listner - For Exercise++//
const backgroundColorChange = document.getElementById('randomColorBtn');

backgroundColorChange.addEventListener("click", function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(r, g, b);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// backgroundColorChange.addEventListener("click", function(event){
//     alert("Color Boom!")
// });

//++Event Handler - For Exercise++//

function randomChangeBGColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(r, g, b);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    
};


//=====Messing with classList=====//

//~~~EXAMPLE CODE~~~//
function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   };
//~~~EXAMPLE CODE~~~//

//++Light/Dark Button - For Exercise(OLD)++//
// function changeNOW(){
//     let everythingChange = document.querySelector('body'); // targetting everything to apply the change to everything because thats why light-dark buttons do
//     let btn = document.querySelector("#modeChange"); // targets button specifically
    
//     everythingChange.classList.toggle("inverse");

//     if(everythingChange.classList.contains("inverse")){
//         btn.innerText = "Light Mode";
//     } 
    
//     else {
//         btn.innerText = "Dark Mode";
//     }
    
// };

//--Refactored: Light/Dark Button - For Exercise--//
const flipLightDark = document.getElementById("modeChange");

flipLightDark.addEventListener("click", function(){
    const swapColors = document.body; //we can shorten out the querySelector by logic 
    // of how we target things with css selectors. Since we're just targetting 
    // and that's all we want this variable to do, then using document.body makes 
    // sense and looks a bit cleaner imo

    swapColors.classList.toggle("dark");

    if (swapColors.classList.contains("dark")){ 
        flipLightDark.textContent = "Light Mode"; 
    }
    else{
        flipLightDark.textContent = "Dark Mode"; 
    }

    //if the body contains .dark, then the element with #modeChange will receive 
    //a change to it's textContent in the form of Light Mode if body DOES have
    //dark (true) or Dark Mode if body DOES NOT have dark (false)

    //since the button itself is targeted by it's id in flipLightDark, then there
    //is no need to create another button within the function scope because
    //be redundant. flipLightDark is within the global scope of this function

    
});