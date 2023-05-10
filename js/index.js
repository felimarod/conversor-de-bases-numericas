import {
  verificar_base,
  decimal_a_otra_base,
  binario_a_otra_base,
  octal_a_otra_base,
  hexadecimal_a_otra_base,
} from "./conversor.js";

const botonCalcular = document.getElementById("boton-calcular");
const inputNumeroIngresado = document.getElementById("numero");
const inputBaseInicial = document.getElementById("basei");
const inputBaseConversion = document.getElementById("basec");
const divSolucion = document.getElementById("solucion");
const parrafoMensajes = document.createElement("p");
parrafoMensajes.classList.add("solucion");

function mostrar(message) {
  divSolucion.innerHTML = message;
}

botonCalcular.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (!divSolucion.hasChildNodes(parrafoMensajes)) {
    divSolucion.append(parrafoMensajes);
  }
  const num_base = parseInt(inputBaseInicial.value);
  const base_a_convertir = parseInt(inputBaseConversion.value);
  const str_num = inputNumeroIngresado.value
    .replace(/(^\s+|\s+$)/, "") // Quitar espacios al final o al inicio
    .toUpperCase(); // Convertir a mayúsculas

  // console.log(num_base,base_a_convertir)
  if (num_base === base_a_convertir) {
    if (!parrafoMensajes.classList.contains("error")) {
      parrafoMensajes.classList.add("error");
    }
    parrafoMensajes.textContent = `Por favor cambie la base númerica a la que desea convertir el número.\nNo puede convertirlo a la misma base.`;
    /* mostrar(`<p>Por favor cambie la base númerica a la que desea convertir el número.
    No puede convertirlo a la misma base.<p>`); */
  } else if (!verificar_base(str_num, num_base)) {
    if (!parrafoMensajes.classList.contains("error")) {
      parrafoMensajes.classList.add("error");
    }
    parrafoMensajes.textContent = `Por favor verifique que el número ingresado corresponda con su base númerica y vuelva a intentarlo.`;
  } else {
    if (parrafoMensajes.classList.contains("error")) {
      parrafoMensajes.classList.remove("error");
    }
    let res;
    if (num_base == 2) {
      console.log("Binario");
      res = binario_a_otra_base(str_num, base_a_convertir);
    } else if (num_base == 8) {
      res = octal_a_otra_base(str_num, base_a_convertir);
    } else if (num_base == 10) {
      res = decimal_a_otra_base(str_num, base_a_convertir);
    } else if (num_base == 16) {
      res = hexadecimal_a_otra_base(str_num, base_a_convertir);
    }
    parrafoMensajes.textContent = `${str_num}(${num_base}) = ${res}(${base_a_convertir})`;
  }
});
