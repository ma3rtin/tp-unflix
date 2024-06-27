let formulario = document.getElementById("formulario");

let elementoMensaje = document.getElementById("mensaje");

console.log("script andando");

let mensajes = [];

let expRegNombreApellido = /^[A-Za-z]+$/;
let expRegEmail = /^(.+\@.+\..+)$/;
let expRegUsuario = /^[A-Za-z0-9]+$/;
let expRegTarjeta = /^\d{16,19}$/;
let expRegClaveTarjeta = /^[1-9]{3}$/;
let expRegContrasenia = /^(?=(.*[A-Za-z]){2})(?=(.*\d){2})(?=(.*[^A-Za-z0-9]){2}).{8,}$/;

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  elementoMensaje.innerHTML = "";
  console.log("Formulario enviado");
  let formularioValido = validarFormulario();
  
  if (formularioValido) {
    window.location.href = "../index.html";
  }
});
function validarFormulario() {
  mensajes = [];
  elementoMensaje.classList.remove('visible');
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;

  let nombreYApellidoValido = validarNombreYApellido(nombre, apellido);

  let email = document.getElementById("email").value;

  let emailValido = validarEmail(email);

  let usuario = document.getElementById("usuario").value;

  let usuarioValido = validarUsuario(usuario);

  let contrasenia = document.getElementById("contrasenia").value;

  let contraseniaValida = validarContrasenia(contrasenia);

  let contrasenia2 = document.getElementById("contrasenia2").value;

  if (contrasenia != contrasenia2) {
    mensajes.push("Las contraseñas no coinciden.");
  }
  let tarjeta = document.getElementById("numero").value;

  let tarjetaValida = validarTarjeta(tarjeta);

  let pin = document.getElementById("pin").value;

  let pinValido = validarPin(pin);

  if (
    nombreYApellidoValido &&
    emailValido &&
    usuarioValido &&
    contraseniaValida &&
    contrasenia == contrasenia2 &&
    tarjetaValida &&
    pinValido
  ) {
    return true;
  } else {
    elementoMensaje.classList.add('visible');
    mensajes.forEach((m) => {
      elementoMensaje.innerHTML += m + "<br>";
    });
    //alert(mensajes)
  }
}

function validarNombreYApellido(n, a) {
  if (
    n.length == 0 ||
    a.length == 0 ||
    !expRegNombreApellido.test(n) ||
    !expRegNombreApellido.test(a)
  ) {
    console.log("nombre apellido invalido");
    return false;
  } else return true;
}

function validarEmail(e) {
  if (e.length == 0 || !expRegEmail.test(e)) {
    console.log("email invalido");
    return false;
  } else return true;
}

function validarUsuario(u) {
  if (u.length == 0 || !expRegUsuario.test(u)) {
    console.log("usuario invalido");
    return false;
  } else return true;
}

function validarContrasenia(c) {
  if (c.length == 0 || !expRegContrasenia.test(c)) {
    mensajes.push(
      "Contraseña invalida. Debe contener al menos 2 letras, números y carácteres especiales."
    );
    return false;
  } else return true;
}

function validarPin(p) {
  if (p.length == 0 || !expRegClaveTarjeta.test(p)) {
    console.log("p: ", p);
    if (p == "000") {
      mensajes.push("La clave de la tarjeta no puede ser '000'.");
    }
    return false;
  } else return true;
}

function validarTarjeta(t) {
  if (t.length == 0 || !expRegTarjeta.test(t)) {
    mensajes.push("Tarjeta invalida.")
    console.log("tarjeta invalida");
    return false;
  } else {
    let ultimoNumero = parseInt(t.slice(-1));
    let restoDeNumeros = t.slice(0, t.length+1);
    let suma = 0;
    for (let i = 0; i < t.length - 1; i++) {
      suma += parseInt(restoDeNumeros.charAt(i));
    }
    console.log("suma = ", suma);
    if (suma % 2 == 0 && ultimoNumero % 2 == 0) {
      mensajes.push("El último número de la tarjeta debe ser impar.");
      return false;
    } else if (suma % 2 != 0 && ultimoNumero % 2 != 0) {
      mensajes.push("El último número de la tarjeta debe ser par.");
      return false;
    }
    return true;
  }
}
