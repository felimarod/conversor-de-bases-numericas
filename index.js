var solucion = document.getElementById("solucion")
var numero = document.getElementById("numero")
var base = document.getElementById("base")

function calcular() {
    decimal_a_otra_base()
}
function datos_correctos() {
    return true
}
function regresar_num(num){
    if( num < 10 ) {
        return num
    } if( num == 10 ) {
        return "A"
    } else if( num == 11 ){
        return "B"
    } else if( num == 12 ){
        return "C"
    }else if( num == 13 ){
        return "D"
    }else if( num == 14 ){
        return "E"
    }else if( num == 15 ){
        return "F"
    }
}
function decimal_a_otra_base() {
    // if (datos_correctos()) {
    num = parseInt(document.getElementById("numero").value)
    base_a_convertir = parseInt(document.getElementById("base").value)
    var ret = ""
    console.log(num, base_a_convertir)

    while (num >= base_a_convertir) {
        let mod = num % base_a_convertir
        ret = regresar_num(mod) + ret
        num = (num - mod) / base_a_convertir
    }
    ret = regresar_num(num) + ret
    solucion.innerHTML = "<p>" + "El número " + + " en base " + " es " + ret + "<\p>"
    // solucion.innerHTML = ret
    // } else {
    //     alert("Por favor ingrese datos correctos.")
    //     solucion.value = ""
    // }

}