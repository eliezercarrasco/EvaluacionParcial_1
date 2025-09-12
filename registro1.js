// ======================
// VALIDACIÓN FORMULARIO
// ======================
document.getElementById("registro").addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;

  // ======================
  // Validación Nombre
  // ======================
  const nombre = document.getElementById("nombre").value.trim();
  if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
    document.getElementById("errorNombre").innerText =
      "Ingrese un nombre válido (solo letras y espacios).";
    valido = false;
  } else {
    document.getElementById("errorNombre").innerText = "";
  }

  // ======================
  // Validación Correo
  // ======================
  const correo = document.getElementById("correo").value.trim();
  if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(correo)) {
    document.getElementById("errorCorreo").innerText =
      "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
    valido = false;
  } else {
    document.getElementById("errorCorreo").innerText = "";
  }

  // ======================
  // Validación Contraseña
  // ======================
  const password = document.getElementById("password").value;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
  if (!regexPass.test(password)) {
    document.getElementById("errorPassword").innerText =
      "La contraseña debe tener al menos 8 caracteres, incluir mayúscula, minúscula, número y un símbolo (@#$%).";
    valido = false;
  } else {
    document.getElementById("errorPassword").innerText = "";
  }

  // ======================
  // Confirmación Contraseña
  // ======================
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("errorConfirmPassword").innerText =
      "Las contraseñas no coinciden.";
    valido = false;
  } else {
    document.getElementById("errorConfirmPassword").innerText = "";
  }

  // ======================
  // Validación Teléfono (Opcional)
  // ======================
  const telefono = document.getElementById("telefono").value;
  if (telefono !== "" && !/^\d{9}$/.test(telefono)) {
    document.getElementById("errorTelefono").innerText =
      "Ingrese un teléfono válido de 9 dígitos.";
    valido = false;
  } else {
    document.getElementById("errorTelefono").innerText = "";
  }

  // ======================
  // Validación Dirección
  // ======================
  const direccion = document.getElementById("direccion").value.trim();
  if (direccion === "") {
    document.getElementById("errorDireccion").innerText =
      "La dirección es obligatoria.";
    valido = false;
  } else {
    document.getElementById("errorDireccion").innerText = "";
  }

  // ======================
  // Validación Edad + Descuento
  // ======================
  const edad = parseInt(document.getElementById("edad").value, 10);
  if (isNaN(edad) || edad <= 0) {
    document.getElementById("errorEdad").innerText =
      "Ingrese una edad válida (mayor a 0).";
    valido = false;
  } else {
    document.getElementById("errorEdad").innerText = "";
  }

  // ======================
  // Enviar si todo es válido
  // ======================
  if (valido) {
    if (edad > 50) {
      alert("Registro exitoso ✅\nUsted tendrá un descuento del 20% 🎉");
    } else {
      alert("Registro exitoso ✅");
    }
    this.reset();
  }
});
