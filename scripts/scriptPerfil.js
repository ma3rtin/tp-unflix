
//Local storage
let nombre = localStorage.getItem('usuario');
let contraseña = localStorage.getItem('contraseña');

let nombrePantalla = document.getElementById("usuario");
let contraseñaPantalla = document.getElementById("contraActual");

console.log(nombre);

nombrePantalla.innerHTML = nombre;
contraseñaPantalla.innerHTML += transformarAsterisco(contraseña);

//Carteles

let cartel = document.getElementById("cartel");

function activarCartel(){
    cartel.style.display = "block";
}

function cerrar(){
  cartel.style.display="none";
}

//Pantalla cuenta

function transformarAsterisco(texto) {
    return '*'.repeat(texto.length);

}

function cambiarContraseña(){
   
    let nueva = document.getElementById("contraseña1");
    let confirmacion = document.getElementById("contraseña2");
    const regex = /^(?=(?:.*[a-zA-Z]){2})(?=(?:.*\d){2})(?=(?:.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]){2}).{8,}$/;

    if((nueva.value.length == 0 || (regex.test(nueva.value) == 0)) && (confirmacion.value.length == 0 || (regex.test(confirmacion.value) == 0))){
        alert("contraseña invalida o campo vacio");
        return;
    }
    else{
        if(nueva.value != confirmacion.value){
          alert("las contraseñas no son iguales");
          return;
        }
    };
    contraseñaPantalla.innerHTML = transformarAsterisco(nueva.value);
    activarCartel();

}

//Pantalla suscripcion

//Validaciones tarjeta 
let expTarjeta = /^\d{16,19}$/;

function validarTarjeta() {

    let valorTarjeta = document.getElementById("numeroTarjeta");

    if (valorTarjeta.value.length == 0 || !expTarjeta.test(valorTarjeta.value)) {
     alert("Tarjeta invalida")
      return false;
    } else {
      let ultimoNumero = parseInt(valorTarjeta.value.slice(-1));
      let restoDeNumeros = valorTarjeta.value.slice(0, valorTarjeta.value.length+1);
      let suma = 0;
      for (let i = 0; i < valorTarjeta.value.length - 1; i++) {
        suma += parseInt(restoDeNumeros.charAt(i));
      }
      if (suma % 2 == 0 && ultimoNumero % 2 == 0) {
        alert("El último número de la tarjeta debe ser impar.")
        return false;
      } else if (suma % 2 != 0 && ultimoNumero % 2 != 0) {
        alert("El último número de la tarjeta debe ser par.")
        return false;
      }
      return true;
    }
}

let expPin = /^(?!.*(.).*\1)[1-9]{1,3}$/;

function validarPin(){

    let pinTarjeta = document.getElementById("pinTarjeta");

    if(pinTarjeta.value.length == 0 || !expPin.test(pinTarjeta.value)){
        alert("Pin invalido")
      return false;
    }
    else{
        return true;
    }

}

//validaciones cupon de pago

function verificarCheckbox(){
  let check1 = document.getElementById("lugarPago1");
  let check2 = document.getElementById("lugarPago2");
  if(check1.checked || check2.checked){
    return true;
  }else{
    return false;
  }
  
}

//Guardar 

function guardarCambios() {
  
  let radio1 = document.getElementById("metodo1");
  let radio2 = document.getElementById("metodo2");
  let radio3 = document.getElementById("metodo3");
  let validado = false;

  if (radio1.checked) {
      if (!validarTarjeta() || !validarPin()) {
          return;
      } else {
          validado = true;
      }
  }

  if (radio2.checked) {
      if (!verificarCheckbox()) {
          alert("Seleccione una de las sucursales");
          return;
      } else {
          validado = true;
      }
  }

  if (!radio1.checked && !radio2.checked && !radio3.checked) {
      alert("No seleccionó ninguno de los métodos");
      return;
  }

  if (validado || radio3.checked) {
    activarCartel();
  }

}

function cerrarSesion(){
  localStorage.clear();
  window.location.href="../index.html";
}