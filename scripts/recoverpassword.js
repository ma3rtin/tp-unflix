let enviar = document.getElementById("enviar");

let emailInput = document.getElementById("email");
let usuarioInput = document.getElementById("usuario");

function validarForm() {
  let email = emailInput.value;
  let usuario = usuarioInput.value;

  if (email.length > 0 && usuario.length > 0) {
    return true;
  } else {
    return false;
  }
}

validarForm();

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('entré en el evento');
  if (!validarForm()) {
    alert("Completar los campos.");
  } else {
    window.location.href = "../index.html";
  }
});
