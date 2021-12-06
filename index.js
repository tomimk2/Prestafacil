class Prestamo {
  constructor(nombre, dni, numeroPrestamo, numeroCuota) {
    this.nombre = nombre;
    (this.dni = dni), (this.numeroPrestamo = numeroPrestamo);
    this.interes = numeroCuota;
  }
}

let PrestamosSolicitados = [];

$(document).ready(function(){ 
  $('#info').on('click',function(){
     $('#Nosotros').toggle(2000);
  });
});

$("#boton1").click(function () {
  location.reload();
});
$("#boton").on("click", enviar);

function enviar() {
 
  let nombre = $("#nombre").val();
  let dni = $("#dni").val();
  let numeroPrestamo = parseInt(document.getElementById("prestamo").value);
  let numeroCuota = parseInt(document.getElementById("cuota").value);
  let correo = $("#Email").val();
  let error = $(".error");
  let recuadro = $(".input");
  let recuadro1 = $(".input1");
  let recuadro2 = $(".input2");
  let recuadro3 = $(".input3");
  localStorage.setItem(nombre, correo);

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
  let PagoCuota = division(
    suma(numeroPrestamo, interes(numeroPrestamo)),
    numeroCuota
  );
  PrestamosSolicitados.sort(function (numeroPrestamo1, numeroPrestamo2) {
    if (numeroPrestamo1.numeroPrestamo > numeroPrestamo2.numeroPrestamo) {
      return 1;
    } else if (
      numeroPrestamo1.numeroPrestamo < numeroPrestamo2.numeroPrestamo
    ) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(PrestamosSolicitados);

  PrestamosSolicitados.push(
    new Prestamo(nombre, dni, numeroPrestamo, numeroCuota, PagoCuota)
  );

  if (nombre == "") {
    console.log("Datos Incorrectos");
    error.css("display", "block");
    recuadro.css("border", "solid red 2px");
    error.html("Datos Incorrectos! Por Favor volver a ingresar los datos.");
  } else if (dni == "") {
    console.log("Datos Incorrectos");
    error.css("display", "block");
    recuadro1.css("border", "solid red 2px");
    error.html("Datos Incorrectos! Por Favor volver a ingresar los datos.");
  } else if (numeroPrestamo == 0 || numeroPrestamo == "") {
    console.log("Datos Incorrectos");
    error.css("display", "block");
    recuadro2.css("border", "solid red 2px");
    error.html("Datos Incorrectos! Por Favor volver a ingresar los datos.");
  } else if (correo == "") {
    console.log("Datos Incorrectos");
    error.css("display", "block");
    recuadro3.css("border", "solid red 2px");
    error.html("Datos Incorrectos! Por Favor volver a ingresar los datos.");
  } else {
    console.log("el Pago de la cuota es de $" + PagoCuota);
    mostrarPago();
  }

  function mostrarPago() {
    $("#form").html(
      "<div id='Resultado'>" +
        "<h3>Usted solicito el pago en: " +
        numeroCuota +
        " cuotas</h3>" +
        "<h3>El valor de la cuota solicitada es:</h3>" +
        "<h3>$" +
        PagoCuota +
        "</h3>" + "</div>" +
        "<button id='boton2' type='button'>Confirmar</button>" 
        
    );
  $("#boton2").on("click" , confirmar )
  function confirmar() {

   Swal.fire(
     'Confirmado!',
     'Usted confirmo la pre-aprobación del credito',
     'success'
   );
};} 
}
