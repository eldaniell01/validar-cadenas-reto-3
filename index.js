var verdadero = true;
var falso = false;
const lett = "bici coche (balón) bici coche peluche";


function permitido(lett){
    return lett.split(" ")
    .some(element => element.includes("(")&& element.includes(")") && element.includes("") && !element.includes("{") &&  !element.includes("}") && !element.includes("[") && !element.includes("]") )
}

console.log(permitido(lett));