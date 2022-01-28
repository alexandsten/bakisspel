var storyTop;   // storyn som visas högst upp
var storyNext1; // nästa story för knapp 1
var storyNext2; // nästa story för knapp 2
var storyNext3; // nästa story för knapp 3

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

    let stories = JSON.parse(jsonCode).story;
    
    // testa ett nytt sätt 

    for (let i = 0; i < stories[0].kapitel.length; i++) {
        if (stories[0].kapitel[i].titel.name == storyChapter) {
            choices1.innerHTML = stories[0].kapitel[i].choices.choiceText1; // text för valen   
        /*    choices1.id = stories[0].kapitel[i].titel.next1Text;  // kan ha texten inför nästa val här */
            storyNext1 = stories[0].kapitel[i].titel.next1Text;
            choices1.addEventListener("click",nextChoices);
      
            choices2.innerHTML = stories[0].kapitel[i].choices.choiceText2;
        /*    choices2.id = stories[0].kapitel[i].titel.next2;  */
            storyNext2 = stories[0].kapitel[i].titel.next1Text;
            choices2.addEventListener("click",nextChoices);
      
            choices3.innerHTML = stories[0].kapitel[i].choices.choiceText3;
        /*    choices3.id = stories[0].kapitel[i].titel.next3; */
            storyNext3 = stories[0].kapitel[i].titel.next1Text;
            choices3.addEventListener("click",nextChoices);

            storyTop.innerHTML = stories[0].kapitel[i].story.storyText;  // texten på toppen av skärmen
        }
    }
}


function nextChoices() {

    storyChapter++;
   
// vilken story som ska visas innan nästa "val", kan även välja vilken av de 3 seten av val som ska visas vid nästa val
    if (this.id == "choices1") {
        alert(storyNext1)
        /* nästa val = 1 / de goda valen */
    } else if (this.id == "choices2") {
        alert(storyNext2)
         /* nästa val = 2 / de neutrala valen */
    }   else if (this.id == "choices2") {
        alert(storyNext3)
         /* nästa val = 3 / de onda valen */
    }

    
    // kalla på ny story

    let request = new XMLHttpRequest(); // Object för Ajax-anropet
	request.open("GET","json/story.json",true);
	request.send(null); // Skicka begäran till servern
	request.onreadystatechange = function () { // Funktion för att avläsa status i kommunikationen
		if (request.readyState == 4) // readyState 4 --> kommunikationen är klar
			if (request.status == 200) createChoices(request.responseText); // status 200 (OK) --> filen fanns
			else document.getElementById("storyText").innerHTML = "Den begärda resursen fanns inte.";}

}