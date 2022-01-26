var storyChoices = ["Scream HELLO IS ANYONE THERE!? as loud as you can", "Quietly start sobbing", " Tell yourself that you need a drink", "Reminiscent of how you embarresed yourself years ago"];



var choice1;    // övre svars raden
var choice2;    // undre svars raden


var choiceText1;    // svars text (1?)


function init() {

    choice1 = document.getElementById("choiceContainer1");  // övre raden
    choice2 = document.getElementById("choiceContainer2");  // undre raden

    createChoices();
}

window.addEventListener("load",init);

function createChoices() {
    let choiceArray = ["1","1","2","2"];

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
    choiceDiv.innerHTML = storyChoices[0];      // text för svar
    storyChoices.splice(0,1);


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
    }

}


function destroyChoices() {

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