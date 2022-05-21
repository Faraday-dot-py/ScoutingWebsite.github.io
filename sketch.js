var txt;

function preload() {
    txt = loadStrings("settings.txt");
}

function getElements(foo) {
    let element = foo.split(";");
    let text = "";
    let onClick = false;

    if(element[0] === "button") {
        createButtonElem(element, text, onClick);
    }
}

function createButtonElem(elemArray, buttonText, onClick) {
    let params = elemArray[1].split(":");
    replaceSpaces(params);
    for(let i=0; i<params.length; i++) {
        if(params[i] == "text"){
            buttonText = params[i+1];
        }else if(params[i] == "increment") {
            if(params[i+1] == "true") {
                onClick = true;
            }
            console.log(params.length-1 - i);
        }
    }
    console.log("button text: " + buttonText);
    console.log("onClick result: " + onClick);
    console.log(params);
    writeButton(buttonText, onClick);
}

function createButtonPlus(text) {
    var buttonPlus = document.createElement('button');
        buttonPlus.innerHTML = text;
        buttonPlus.onclick = function() {
            plus();
            updateVal();
        }
    var form = document.getElementById('sheetdb-form');
    form.appendChild(buttonPlus);
}

function createButtonMinus(text) {
    var buttonMinus = document.createElement('button');
        buttonMinus.innerHTML = text;
        buttonMinus.onclick = function() {
            minus();
            updateVal();
        }
    var form = document.getElementById('sheetdb-form');
    form.appendChild(buttonMinus);
}

function createButtonOther(text) {
    var buttonOther = document.createElement('button');
        buttonOther.innerHTML = text;
    var form = document.getElementById('sheetdb-form');
    form.appendChild(buttonOther);
}

function writeButton(text, onClick) {
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

function replaceSpaces(array) {
    for(let i=0; i<array.length; i++) {
        array[i] = array[i].replace(/\s/g, '');
    }
}

function setup(){
    noCanvas();
    txt.forEach(elementRaw => {
//        createP(elementRaw);
        getElements(elementRaw);
    });
}