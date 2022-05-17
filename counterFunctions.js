var val = 0;

function updateVal(){
    val = document.getElementById("val").innerHTML = getVal();
    val = document.getElementById("test").innerHTML.value = getVal();
}

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