var storyTop;   // storyn som visas högst upp

var choices1; // knapp 1
var choices2; // knapp 2
var choices3; // knapp 3
var choices4; // knapp 4

var choice1;    // övre svars raden
var choice2;    // undre svars raden

var storyChapter; // aktuellt kapitel
var choiceText1;    // svars text (1?)


function init() {

    choice1 = document.getElementById("choiceContainer1");  // övre raden
    choice2 = document.getElementById("choiceContainer2");  // undre raden

    choices1 = document.getElementById("choices1");
    choices2 = document.getElementById("choices2");
    choices3 = document.getElementById("choices3");
    choices4 = document.getElementById("choices4");

    // story
    storyTop = document.getElementById("storyText");  // undre raden
    
    //
    storyChapter = "1";
    
    let request = new XMLHttpRequest(); // Object för Ajax-anropet
	request.open("GET","json/story.json",true);
	request.send(null); // Skicka begäran till servern
	request.onreadystatechange = function () { // Funktion för att avläsa status i kommunikationen
		if (request.readyState == 4) // readyState 4 --> kommunikationen är klar
			if (request.status == 200) createChoices(request.responseText); // status 200 (OK) --> filen fanns
			else document.getElementById("storyText").innerHTML = "Den begärda resursen fanns inte.";}
            
}

window.addEventListener("load",init);


function createChoices(jsonCode) {
    storyChapter--; // så att 1 blir 0 osv
    let stories = JSON.parse(jsonCode).story;
    storyTop.innerHTML = stories[0].kapitel[storyChapter].story.storyText;  // texten på toppen av skärmen



    // testa ett nytt sätt 

    for (let i = 0; i < stories.length; i++) {
        if (stories[0].kapitel[i].titel.name == storyChapter) {
            console.log(storyChapter);
        }
    }

   
    // text på knappen
    
        choices1.innerHTML = stories[0].kapitel[storyChapter].choices.choiceText1; // text för valen
        choices1.id = stories[0].kapitel[storyChapter].titel.next1;  // id för valen - så man vet vad nästa val är
        choices1.addEventListener("click",destroyChoices);
  
        choices2.innerHTML = stories[0].kapitel[storyChapter].choices.choiceText2;
        choices2.id = stories[0].kapitel[storyChapter].titel.next2; 
        choices2.addEventListener("click",destroyChoices);
  
        choices3.innerHTML = stories[0].kapitel[storyChapter].choices.choiceText3;
        choices3.id = stories[0].kapitel[storyChapter].titel.next3; 
        choices3.addEventListener("click",destroyChoices);
  
        choices4.innerHTML = stories[0].kapitel[storyChapter].choices.choiceText4;
        choices4.id = stories[0].kapitel[storyChapter].titel.next4; 
        choices4.addEventListener("click",destroyChoices);
  
        // text för svar
   
}


function destroyChoices() {

    storyChapter = this.id; // byt kapitel, den man tryckte på
 
    // kalla på ny story

    let request = new XMLHttpRequest(); // Object för Ajax-anropet
	request.open("GET","json/story.json",true);
	request.send(null); // Skicka begäran till servern
	request.onreadystatechange = function () { // Funktion för att avläsa status i kommunikationen
		if (request.readyState == 4) // readyState 4 --> kommunikationen är klar
			if (request.status == 200) createChoices(request.responseText); // status 200 (OK) --> filen fanns
			else document.getElementById("storyText").innerHTML = "Den begärda resursen fanns inte.";}

}