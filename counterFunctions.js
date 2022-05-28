var val = 0;


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