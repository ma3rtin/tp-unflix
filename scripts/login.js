let entrar = document.getElementById("entrar");
let expRegContrasenia =
  /^(?=(.*[A-Za-z]){2})(?=(.*\d){2})(?=(.*[^A-Za-z0-9]){2}).{8,}$/;
entrar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  let email = document.getElementById("email").value;
  let contrasenia = document.getElementById("contraseña").value;
  if (email.length == 0 || contrasenia.length == 0) {
    alert("Completar formulario");
  } else {
    if (!expRegContrasenia.test(contrasenia)) alert("Contraseña invalida.");
    else {
      localStorage.setItem("usuario", email);
      localStorage.setItem("contraseña", contrasenia);
      window.location.href = "../pages/principal.html";
    }
  }
});
