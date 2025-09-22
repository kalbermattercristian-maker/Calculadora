let operacion = "";

function agregar(valor) {
  operacion += valor;
  document.getElementById("pantalla").value = operacion;
}

function limpiar() {
  operacion = "";
  document.getElementById("pantalla").value = "";
}

function retroceder() {
  // 🔧 Esta es la función clave
  operacion = operacion.slice(0, -1); // Quita el último carácter
  document.getElementById("pantalla").value = operacion;
}

function calcular() {
  try {
    const resultado = eval(operacion);
    document.getElementById("pantalla").value = resultado;
    operacion = resultado.toString(); // Para seguir calculando
  } catch (e) {
    document.getElementById("pantalla").value = "Error";
    operacion = "";
  }

}
