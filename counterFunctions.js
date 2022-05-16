var val = setInterval(function() {
    document.getElementById("val").innerHTML = getVal();
},100);
minus();

function getVal(){
    console.log(val);
    return val;
}
function plus() {
    val += 1;
    console.log(val + "++");
}
function minus(){
    val -= 1;
    console.log(val + "--");
}