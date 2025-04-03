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

//example code//
// function changeBtnStyle() {
//     const btn = document.querySelector(".cool-btn")
//     btn.classList.toggle("glow"); // Toggles glow effect
//    };
//example code//

//++Light/Dark Button - For Exercise++//
function changeNOW(){
    let everythingChange = document.querySelector('body'); // targetting everything to apply the change to everything because thats why light-dark buttons do
    let btn = document.querySelector("#modeChange"); // targets button specifically
    
    everythingChange.classList.toggle("inverse");

    if(everythingChange.classList.contains("inverse")){
        btn.innerText = "Light Mode";
    } 
    
    else {
        btn.innerText = "Dark Mode";
    }
    
};