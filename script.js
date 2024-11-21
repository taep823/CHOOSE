// html button elements
let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');


// html content elements
let text = document.querySelector('.text');
let run = document.querySelector('h2');
let scalpel=document.querySelector('h3');

// html images elements
let start = document.querySelector('.abdhospital');
    
let choiceAimage = document.querySelector('.choiceAimage');
    choiceAimage.style.display ="none";
let choiceA1image = document.querySelector('.choiceA1image');
    choiceA1image.style.display ="none";
let choiceA2image = document.querySelector('.choiceA2image');
    choiceA2image.style.display ="none";
let h2 = document.querySelector('.run');
run.style.display="none";

let knifeMan=document.querySelector('.knifeMan');
knifeMan.style.display="none";

let choiceB1image=document.querySelector('.choiceB1image');
choiceB1image.style.display="none";

let h3=document.querySelector('.scalpel');
scalpel.style.display="none";

let choiceB2image=document.querySelector('.choiceB2image');
choiceB2image.style.display="none";

headButton.addEventListener('click', function() {
    console.log("topbutton")
text.innerHTML = "You find one of your friends unconscious on the operating bed. <strong>You can double click</strong> to go check on them, or <strong>search the page</strong> to run away.";
start.style.display = "none";
choiceAimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
run.style.display="block";
choiceB1image.style.display="none";
scalpel.style.display="none";
choiceB2image.style.display="none";
});

choiceAimage.addEventListener('dblclick', function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "They jump up and knock you out."
    choiceA1image.style.display ="block";
    run.style.display="none";
});

run.addEventListener("mouseenter", function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "You run and find the exit and live another day"
    choiceA2image.style.display ="block";
});




exploreButton.addEventListener("click", function(){
    
    text.innerHTML = "There’s a man down the hallway with a knife, <strong>double click the picture </strong> to run away, or <strong>find and click the hand </strong> to grab a scalpel on the floor"
    start.style.display = "none";
    exploreButton.style.display="none";
    headButton.style.display="none";
    knifeMan.style.display="block";
    scalpel.style.display="block";
});
knifeMan.addEventListener("dblclick" , function() {
    text.innerHTML = "You run and luckily find the exit and get away quickly"
    choiceB1image.style.display="block";
    knifeMan.style.display="none";
});
scalpel.addEventListener("click" , function(){
    text.innerHTML="You both fight and struggle yet he ends up winning."
    choiceB2image.style.display="block";
    knifeMan.style.display="none";
});
