var val = 0;
var val2 = 0;
var val3 = 0;
var val4 = 0;
var val5 = 0;


function updateVal(){
    val = document.getElementById("val").value = getVal();
}

function getVal(){
    return val;
}
function plus() {
    val += 1;
}
function minus(){
    val -= 1;
}