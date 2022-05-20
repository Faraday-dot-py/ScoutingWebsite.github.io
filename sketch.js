var txt;

function preload() {
    txt = loadStrings("settings.txt");
}

function getElements(foo) {
    let element = foo.split(":");
    if(element[0] === "{button}"){
        createP('<button type="button">'+ element[1] +'</button>');
    }
}
function setup(){
    noCanvas();
    // console.log(txt);
    txt.forEach(elementRaw => {
        createP(elementRaw);
        getElements(elementRaw);
    });

}