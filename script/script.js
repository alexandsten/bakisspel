var storyText = ["You wake up in your own sweat, piss and puke. You slowly try to sit up but the whole room is spinning. As you do a pathetic attempt at sitting straight, you fall over onto the floor. You disgust yourself."];



var choice1;    // övre svars raden
var choice2;    // undre svars raden

var storyChapter; // aktuellt kapitel


var choiceText1;    // svars text (1?)


function init() {

    choice1 = document.getElementById("choiceContainer1");  // övre raden
    choice2 = document.getElementById("choiceContainer2");  // undre raden
    story = document.getElementById("storyText");  // undre raden

    // story
    let storyTop = document.createElement("p"); // skapa choice div?
    storyTop.innerHTML = storyText[0];
    story.appendChild(storyTop);
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
    let choiceTextNr = 1;
    let choiceArray = ["1","1","2","2"];
    let stories = JSON.parse(jsonCode).story;

    for (let i = 0; i < 4; i++) {
    let choiceDiv = document.createElement("div"); // skapa choice div?
    /*
    let info = document.createElement("h3");
    let cityP = document.createElement("p");
    let ratingP = document.createElement("p");
    let priceP = document.createElement("p");
    */

    // classes / id
    choiceDiv.setAttribute("class","choices");  // sätt class
    choiceDiv.setAttribute("id","choice" + choiceArray[0]);     // sätt id
   


    // text på knappen
    if (choiceTextNr == 1) {
       choiceDiv.innerHTML = stories[0].kapitel[storyChapter].choices.choiceText1; 
       choiceDiv.setAttribute("id", stories[0].kapitel[storyChapter].titel.next1); 
    } else if (choiceTextNr == 2) {
        choiceDiv.innerHTML = stories[0].kapitel[storyChapter].choices.choiceText2;
        choiceDiv.setAttribute("id", stories[0].kapitel[storyChapter].titel.next2); 
    } else if (choiceTextNr == 3) {
        choiceDiv.innerHTML = stories[0].kapitel[storyChapter].choices.choiceText3;
        choiceDiv.setAttribute("id", stories[0].kapitel[storyChapter].titel.next3); 
    } else if (choiceTextNr == 4) {
        choiceDiv.innerHTML = stories[0].kapitel[storyChapter].choices.choiceText4;
        choiceDiv.setAttribute("id", stories[0].kapitel[storyChapter].titel.next4); 
    }
    ;      // text för svar


    // append
    choice1 = document.getElementById("choiceContainer" + choiceArray[0]);
    choiceArray.splice(0,1);

    choice1.appendChild(choiceDiv);     // lägg till det skapade svaret till container


    // eventlisteners

    choiceDiv.addEventListener("click",destroyChoices);

    /* add event listener
    infoDiv.appendChild(saveNode);
    infoDiv.appendChild(info);
    infoDiv.appendChild(cityP);
    infoDiv.appendChild(priceP);
    infoDiv.appendChild(ratingP)
    info.appendChild(nameNode);
    cityP.appendChild(cityNode);
    ratingP.appendChild(ratingNode);
    priceP.appendChild(priceNode);
    info.addEventListener("click",loadInfo) 
    saveNode.addEventListener("click",saveLocal) 
    */
    choiceTextNr++;
    }
}


function destroyChoices() {

    storyChapter = this.id;
    alert(storyChapter);
    document.getElementById("choiceContainer1").remove();
    document.getElementById("choiceContainer2").remove();

}



/*  ingen reload för sidan

function newInfo (responseInfo) {
    likeBtn2.style.display = "none";
    response = JSON.parse(responseInfo);

    for (let i = 0; i < response.payload.length; i++) {
    infoDiv = document.createElement("div");
    let info = document.createElement("h3");
    let cityP = document.createElement("p");
    let ratingP = document.createElement("p");
    let priceP = document.createElement("p");

    infoDiv.setAttribute("class","resultinfo");
    info.setAttribute("class","info");
    info.setAttribute("id",response.payload[i].id);
    cityP.setAttribute("class","city");
    ratingP.setAttribute("class","rating");

    let rating = response.payload[i].rating;
    rating = Math.round(rating);

    let name = response.payload[i].name;
    let city = response.payload[i].city;
    let price = "Pris: " + response.payload[i].price_range + "kr";

    let saveNode = document.createElement("img");
    let nameNode = document.createTextNode(name);
    let cityNode = document.createTextNode(city);
    let priceNode = document.createTextNode(price);
    let ratingNode = document.createElement("img");

    ratingNode.setAttribute("class","rating_s")
    saveNode.setAttribute("class","likeBtn")
    saveNode.setAttribute("id", response.payload[i].id)
    ratingNode.src = "../img/rating/emptystar.svg"
    
    let ids=localStorage.getItem("id");
    if (!ids){
        ids="";
    }
    let idArray=ids.split(',');
    let isLiked=idArray.includes(response.payload[i].id);

    if (isLiked){
        saveNode.src="/img/redheart.png";
    }
    else {
        saveNode.src = "/img/heart.png";
    }

    if (rating == 1) {
        ratingNode.src = "../img/rating/star1.svg";
    }
    if (rating == 2) {
        ratingNode.src = "../img/rating/star2.svg";
    }

    if (rating == 3) {
        ratingNode.src = "../img/rating/star3.svg";
    }
    if (rating== 4) {
        ratingNode.src = "../img/rating/star4.svg";
    }
    if (rating == 5) {
        ratingNode.src = "../img/rating/star4.svg";
    }

    page1.appendChild(infoDiv)
    infoDiv.appendChild(saveNode);
    infoDiv.appendChild(info);
    infoDiv.appendChild(cityP);
    infoDiv.appendChild(priceP);
    infoDiv.appendChild(ratingP)
    info.appendChild(nameNode);
    cityP.appendChild(cityNode);
    ratingP.appendChild(ratingNode);
    priceP.appendChild(priceNode);
    info.addEventListener("click",loadInfo) 
    saveNode.addEventListener("click",saveLocal) 
    }
    if (page1.style.display == "none") {
        prepareMap ();
    }
    requestImg ();
} 

*/