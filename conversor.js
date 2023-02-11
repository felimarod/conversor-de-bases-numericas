function verificar_base(str, base) {
    if (base == 2)
        return str.match(/^[0-1]+$/)
    else if (base == 8)
        return str.match(/^[0-7]+$/)
    else if (base == 10)
        return str.match(/^[0-9]+$/)
    else if (base == 16)
        return str.match(/^[0-9A-F]+$/)
}

function regresar_num(num) {
    if (num < 10) {
        return num
    } else {
        return String.fromCharCode(num + 55)
    }
}
function a_decimal(base, str_num){
    let ult_pos = str_num.length
    let num = 0
    let exp = 0
    // prueba
    while (str_num != "" && exp < 12) {
        str_act = str_num.slice(--ult_pos)
        console.log("bit actual:", str_act)
        if(str_act.match(/[A-F]/)){
            num += (str_act.charCodeAt(0) - 55)*base**exp
        } else {
            num += parseInt(str_act)*base**exp
        }
        
        exp++
        str_num = str_num.substring(0, ult_pos)
        console.log("Nuevo string", str_num)
    }
    return num
}
function binario_a_otra_base(str_num, base_a_convertir) {
    var tam = str_num.length
    var ret = ""
    console.log(str_num, tam, base_a_convertir)
    let nbits, ult_pos
    if (base_a_convertir == 10) {
        return a_decimal(2,str_num)
    } else if (base_a_convertir == 8) {
        nbits = 3
    } else if (base_a_convertir == 16) {
        nbits = 4
    }
    ult_pos = tam - nbits
    // prueba
    while (str_num.length > 0) {
        str_act = str_num.slice(ult_pos)
        //console.log("bit actual:", str_act)
        
        
        str_num = str_num.substring(0, ult_pos)
        //console.log("Nuevo string", str_num) 
        ret = regresar_num(a_decimal(2,str_act)) + ret
        console.log(ret)
        if(ult_pos > nbits)
            ult_pos -= nbits
        else 
            ult_pos = 0   
    }
    return ret
}

function octal_a_otra_base(str_num, base_a_convertir) {
    if(base_a_convertir == 10)
        return a_decimal(8, str_num)
    return "Por hacer jaja"
}

function decimal_a_otra_base(str_num, base_a_convertir) {
    var num = parseInt(str_num)
    var ret = ""
    //console.log(num, base_a_convertir)
    while (num >= base_a_convertir) {
        let mod = num % base_a_convertir
        ret = regresar_num(mod) + ret
        num = (num - mod) / base_a_convertir
    }
    return (regresar_num(num) + ret)
}

function hexadecimal_a_otra_base(str_num, base_a_convertir) {
    if(base_a_convertir == 10)
        return a_decimal(16, str_num)
    return "Por hacer jaja"
}