class Prestamo {
  constructor(nombre, dni, numeroPrestamo, numeroCuota) {
    this.nombre = nombre;
    this.dni = dni,
      this.numeroPrestamo = numeroPrestamo;
    this.interes = numeroCuota;
  }
}

let PrestamosSolicitados = [];
let boton = document.getElementById("boton");
boton.addEventListener("click" , enviar);

function enviar() {

  let nombre = document.getElementById("nombre").value;
  let dni = document.getElementById("dni").value;
  let numeroPrestamo = parseInt(document.getElementById("prestamo").value);
  let numeroCuota = parseInt(document.getElementById("cuota").value);

  localStorage.setItem(dni , nombre);
 
  PrestamosSolicitados.push(new Prestamo(nombre, dni, numeroPrestamo, numeroCuota));

  function division(a, b) {
    return a / b;
  }
  function suma(a, b) {
    return a + b;
  }
  function interes(x) {
    if (numeroCuota == "3") {
      return x * 0.1;
    } else if (numeroCuota == "6") {
      return x * 0.12;
    } else if (numeroCuota == "12") {
      return x * 0.15;
    } else if (numeroCuota == "18") {
      return x * 0.17;
    } else if (numeroCuota == "24") {
      return x * 0.2;
    } else {
      alert("Numero de cuota Incorrecto");
    }
  }
  let PagoCuota = division(suma(numeroPrestamo, interes(numeroPrestamo)), numeroCuota); 
  let Resultado = document.getElementById("form");
  form.innerHTML = `<h1> el pago de la cuota es ` + PagoCuota;

  PrestamosSolicitados.sort(function(numeroPrestamo1,numeroPrestamo2){
 
    if (numeroPrestamo1.numeroPrestamo > numeroPrestamo2.numeroPrestamo){
    return 1;}
    else if (numeroPrestamo1.numeroPrestamo < numeroPrestamo2.numeroPrestamo){
    return -1;}
    else {
      return 0;
    }
  });
  console.log(PrestamosSolicitados);

}

