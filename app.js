function disable() {
    var divide = document.getElementById("divide")
    divide.disabled = true
    var multi = document.getElementById("multi")
    multi.disabled = true
    var plus = document.getElementById("plus")
    plus.disabled = true
    var minus = document.getElementById("minus")
    minus.disabled = true
    var equal = document.getElementById("equal")
    equal.disabled = true
}
disable()

disable()
function getNumber(num=0){
    var result = document.getElementById("result")
    result.value += num
    var divide = document.getElementById("divide")
    divide.disabled = false
    var multi = document.getElementById("multi")
    multi.disabled = false
    var plus = document.getElementById("plus")
    plus.disabled = false
    var minus = document.getElementById("minus")
    minus.disabled = false
    var equal = document.getElementById("equal")
    equal.disabled = false
}    
function clearnm() {
    var result = document.getElementById("result")
    result.className = "input"
    result.value = "";
    var decimal = document.getElementById("decimal")
    decimal.disabled=false
    var divide = document.getElementById("divide")
    divide.disabled = true
    var multi = document.getElementById("multi")
    multi.disabled = true
    var plus = document.getElementById("plus")
    plus.disabled = true
    var minus = document.getElementById("minus")
    minus.disabled = true
    var equal = document.getElementById("equal")
    equal.disabled = true
}
function oper(num){
    var result = document.getElementById("result")
    result.value += num
    var decimal = document.getElementById("decimal")
    decimal.disabled=false
    var divide = document.getElementById("divide")
    divide.disabled = true
    var multi = document.getElementById("multi")
    multi.disabled = true
    var plus = document.getElementById("plus")
    plus.disabled = true
    var minus = document.getElementById("minus")
    minus.disabled = true
    var equal = document.getElementById("equal")
    equal.disabled = true
}
function decimal(num){
    var result = document.getElementById("result");
     result.value += num
    var decimal = document.getElementById("decimal")
    decimal.disabled=true
    decimal.className += " point"
    var divide = document.getElementById("divide")
    divide.disabled = true
    var multi = document.getElementById("multi")
    multi.disabled = true
    var plus = document.getElementById("plus")
    plus.disabled = true
    var minus = document.getElementById("minus")
    minus.disabled = true
    var equal = document.getElementById("equal")
    equal.disabled = true

}

function resultnum() {
    var result = document.getElementById("result") ;
    var decimal = document.getElementById("decimal")
    decimal.disabled=false
    var lastresult = result.value[result.value.length - 1];
    if(lastresult == "+"  || lastresult == "-" || lastresult == "*" || lastresult == "/" || lastresult == "."){
        result.className += " sm"
        result.value = "invalid operator!" 
    }
    else{
        result.value = eval(result.value);
    }
    
}
function del(e) {
    var del = document.getElementById("result")
    var val = del.value
    var index = val.length-1
    var remove = val.slice(0,index)
    del.value = remove  



 }