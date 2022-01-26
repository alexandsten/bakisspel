var choice1;
var choice2;

var choice3;
var choice4;

var choiceText1;


function init() {

    choice1 = document.getElementById("choiceContainer1");
    choice2 = document.getElementById("choiceContainer2");

    choiceText1 = <div id="choice1" class="choices">Scream "hello is anyone there!?"" as loud as you can</div>;

    choice1.innerHTML = choiceText1;
    alert("hello world!");
}

window.addEventListener("load",init);