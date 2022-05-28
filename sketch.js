var txt;
var newLine = document.createElement('br');


function preload() {
    txt = loadStrings("settings.txt");
}

function getElements(foo) {
    let element = foo.split(";");
    let onClick = false;

    if(element[0] === "button") {
        createButtonElem(element, text, onClick);
    }
    if(element[0] === "radio"){
        createRatioElem(element);
    }
//    if(element[0] === "counter"){
//        console.log("THIS IS TOTALLY A COUNTER");
//        createCounter();
//    }
}

function createRatioElem(elemArray) {
    var radioText;
    let params = elemArray[1].split(":");
    replaceSpaces(params);
    for(let i=0; i<params.length; i++) {
        if(params[i] == "options"){
            radioText = splitCommas(params[i+1]);
            console.log(radioText);
        }
    }
    var form = document.getElementById('form');
    form.appendChild(newLine);
    radioText.forEach(text => {
        createRatio(text);
    });
    //WORK ON RADIO (CREATE RADIO FUNCTION)
}
function createButtonElem(elemArray, text, onClick) {
    let params = elemArray[1].split(":");
    replaceSpaces(params);
    for(let i=0; i<params.length; i++) {
        if(params[i] == "text"){
            text = params[i+1];
        }else if(params[i] == "increment") {
            if(params[i+1] == "true") {
                onClick = true;
            }
        }
    }
    if(text != "" && onClick == true) {
        if(text == "+"){
            createButtonPlus(text);
        }else if(text == "-"){
            createButtonMinus(text);
        }else {
            createButtonPlus(text);
        }
    }else if(text != "") {
        createButtonOther(text);
    }
}
//function createCounter(){
////    var buttonPlus = document.createElement('button');
////    buttonPlus.innerHTML = "+";
////    buttonPlus.onclick = function() {
////        plus();
////        updateVal();
////    }
//   var form = document.getElementById('form');
////    form.appendChild(buttonPlus);
//    var input = document.createElement('input');
//    input.setAttribute('placeholder', "0");
//    input.setAttribute('readonly', true);
//    form.appendChild(input);
//    form.appendChild(newLine);
//}

function createButtonPlus(text) {
    plus_button = createButton(text);
    plus_button.mouseClicked(plusFunc);
}
function createButtonMinus(text) {
    minus_button = createButton(text);
    minus_button.mouseClicked(minusFunc);
}
function createButtonOther(text) {
    other_button = createButton(text);
}
function createRatio(text){
    var labelValue = document.createElement('label');
    labelValue.innerHTML = " : " + text;
    var inputValue = document.createElement('input');
    inputValue.type = "radio";
    inputValue.name = "text";
    var form = document.getElementById('form');
    form.appendChild(inputValue);
    form.appendChild(labelValue);
}

function minusFunc(){
    minus();
    updateVal();
}
function plusFunc(){
    plus();
    updateVal();
}
function replaceSpaces(array) {
    for(let i=0; i<array.length; i++) {
        array[i] = array[i].replace(/\s/g, '');
    }
}
function splitCommas(array){
    array = array.split(",");
    return array;
}

function setup(){
    noCanvas();
    txt.forEach(elementRaw => {
//        createP(elementRaw);
        getElements(elementRaw);
    });
}