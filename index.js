function calcular() {
    const str_num = document.getElementById("numero").value
        .replace(/(^\s+|\s+$)/, '') // Quitar espacios al final o al inicio
        .toUpperCase()  // Convertir a mayúsculas
    // console.log(str_num)
    
    const num_base = parseInt(document.getElementById("basei").value)
    const base_a_convertir = parseInt(document.getElementById("basec").value)
    // console.log(num_base,base_a_convertir)
    if (num_base == base_a_convertir) {
        mostrar("<p>Por favor cambie la base númerica a la que desea convertir el número.\nNo puede convertirlo a la misma base.<\p>");
    } else if (!verificar_base(str_num, num_base)) {
        mostrar("<p>Por favor verifique que el número ingresado corresponda con su base númerica y vuelva a intentarlo.<\p>")
    } else {
        let res
        if (num_base == 2) {
            console.log("Binario");
            res = binario_a_otra_base(str_num, base_a_convertir)
        } else if (num_base == 8) {
            res = octal_a_otra_base(str_num, base_a_convertir)
        } else if (num_base == 10) {
            res = decimal_a_otra_base(str_num, base_a_convertir)
        } else if (num_base == 16) {
            res = hexadecimal_a_otra_base(str_num, base_a_convertir)
        }
        mostrar("<p>" + str_num + "(" + num_base + ") = " + res + "(" + base_a_convertir + ")<\p>")
    }
}
function mostrar(message) {
    document.getElementById("solucion").innerHTML = message
}