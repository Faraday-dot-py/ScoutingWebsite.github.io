var txt;

function preload() {
    txt = loadStrings("settings.txt");
}

function getParams(rawElement)
{   
    if (rawElement.length != 0)
    {let element 
        = rawElement.replace(/\s/g,'')

        element = 
        element.substring(
            0, element.length - 1)

        // console.log("elem:" + element)
        
        element =
        element.split("(")
        
        params = 
        element[1].split(",")
        
        // console.log("params:" + params, "elem:" + element)
        return params}else{return ''}
}

function setup(){
    noCanvas();
    
    let buttonParams = []
    
    txt.forEach(elementRaw => 
    {
        if(getParams(elementRaw) != '')
        {
            buttonParams.push(
                getParams(elementRaw)
                )
        }
        // console.log("elementRaw:" + elementRaw)
        // console.log("Params:" + getParams(elementRaw))
    
    });

    buttonValue = []
    buttonText = []
    buttonParams.forEach(element => 
    {
        buttonText.push(element[0])
        if(element.length > 1 && !buttonValue.includes(element[1]))
        {
            buttonValue.push(element[1])
        }
    })

    buttonText.forEach(text =>
    {
        button = createButton(text[0])
    })

    buttonValue.forEach(variable => 
    {
        inp = createInput('', 'text')
        inp.attribute('id', variable)
        inp.attribute('readonly', true)
        inp.attribute('placeholder', '0')
    })
}

// function getElements(foo) {
//     let element = foo.split(";");
//     let text = "";
//     let onClick = false;

//     if(element[0] === "button") {
//         createButtonElem(element, text, onClick);
//     }
// }

// function createButtonElem(elemArray, buttonText, onClick) {
//     let params = elemArray[1].split(":");
//     replaceSpaces(params);
//     for(let i=0; i<params.length; i++) {
//         if(params[i] == "text"){
//             buttonText = params[i+1];
//         }else if(params[i] == "increment") {
//             if(params[i+1] == "true") {
//                 onClick = true;
//             }
//             console.log(params.length-1 - i);
//         }
//     }
//     console.log("button text: " + buttonText);
//     console.log("onClick result: " + onClick);
//     console.log(params);
//     writeButton(buttonText, onClick);
// }

// function createButtonPlus(text) {
//     var buttonPlus = document.createElement('button');
//         buttonPlus.innerHTML = text;
//         buttonPlus.onclick = function() {
//             plus();
//             updateVal();
//         }
//     var form = document.getElementById('form');
//     form.appendChild(buttonPlus);
// }

// function createButtonMinus(text) {
//     var buttonMinus = document.createElement('button');
//         buttonMinus.innerHTML = text;
//         buttonMinus.onclick = function() {
//             minus();
//             updateVal();
//         }
//     var form = document.getElementById('form');
//     form.appendChild(buttonMinus);
// }

// function createButtonOther(text) {
//     var buttonOther = document.createElement('button');
//         buttonOther.innerHTML = text;
//     var form = document.getElementById('form');
//     form.appendChild(buttonOther);
// }

// function writeButton(text, onClick) {
//     if(text != "" && onClick == true) {
//         if(text == "+"){
//             createButtonPlus(text);
//         }else if(text == "-"){
//             createButtonMinus(text);
//         }else {
//             createButtonPlus(text);
//         }
//     }else if(text != "") {
//         createButtonOther(text);
//     }
// }

// function replaceSpaces(array) {
//     for(let i=0; i<array.length; i++) {
//         array[i] = array[i].replace(/\s/g, '');
//     }
// }
