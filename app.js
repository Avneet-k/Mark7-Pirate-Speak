var inputText = document.querySelector("#input-text");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/pirate.json";

function getTranslation(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with the server, try again after some time");
}

function clickHandler(){
    var textInput = inputText.value;  //ssee again
    fetch(getTranslation(textInput))
    .then(response => response.json())
    .then(json => {
        var translatedOutput = json.contents.translated;
        outputDiv.innerText = translatedOutput;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);