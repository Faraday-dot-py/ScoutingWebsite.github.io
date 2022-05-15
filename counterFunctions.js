var val = setInterval(function() {
    document.getElementById("val").innerHTML = getVal();
},10);


function getVal(){
    return val;
}
function plus() {
    val += 1;
    console.log(getVal());
}
function minus(){
    val -= 1;
    console.log(getVal());
}