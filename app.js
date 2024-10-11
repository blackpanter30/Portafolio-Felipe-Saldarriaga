/* Validación del campo: Nombre 
-------------------------------
- Campo Nombre no debe estar en blanco o vacío.
- Debe contener máximo 50 caracteres.
- Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida.
*/

/* Validación del campo: Correo
-------------------------------
- Campo e-mail no debe estar en blanco o vacío.
- Debe estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto (.)
    Ejemplo:  texto@texto.com
- Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida.
*/

/* Validación del campo: Asunto
-------------------------------
- Campo Asunto no debe estar en blanco o vacío.
- Debe contener máximo 50 caracteres.
- Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida.
*/

/* Validación del campo: Mensaje
--------------------------------
- Campo Mensaje no debe estar en blanco o vacío.
- Debe contener máximo 300 caracteres.
- Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida.
*/

/* Validación del campo: Botón
------------------------------
- El botón enviar solo debe ser activado cuando todos los campos del formulário estén llenos.
- El botón debe enviar el mensaje.
*/


const campoNombre = document.getElementById("nombre");
const campoEmail = document.getElementById("email");
const campoAsunto = document.getElementById("asunto");
const campoMsg = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btnEnviar");

// Se agrega el evento 'input' para cada campo:
campoNombre.addEventListener("input", verificarCampos);
campoEmail.addEventListener("input", verificarCampos);
campoAsunto.addEventListener("input", verificarCampos);
campoMsg.addEventListener("input", verificarCampos);



function validaFormulario(event) {
	event.preventDefault(); // Evita que el formulario se envíe
	
	let nMaxCaracteres = 50;
	let nMaxCarTextArea = 300;
	let nombre = "";
	let email = "";
	let asunto = "";
	let mensaje = "";

	// Valida Nombre:
	nombre = document.getElementById("nombre").value.trim();

	if (nombre == "") {
		alert("¡Campo de nombre vacío!");
		return false;
	}

	else if (nombre.length > nMaxCaracteres) {
		alert(`¡El campo de nombre no debe tener más de ${nMaxCaracteres} caracteres!`);
    	return false;
	}


	// Valida Correo:
	email = document.getElementById("email").value.trim();

	if (email == "") {
		alert("¡Campo de correo vacío!");
		return false;
	}
	else if (!email.includes("@")) {
		alert("El correo electrónico debe contener un '@'.");
		return false;
	}	
	else if (email.split("@")[1].indexOf(".") === -1) {
		alert("El correo electrónico debe contener un '.' después del '@'.");
		return false;
	}


	// Valida Asunto:
	asunto = document.getElementById("asunto").value.trim();

	if (asunto == "") {
		alert("¡Campo de asunto vacío!");
		return false;
	}
	else if (asunto.length > nMaxCaracteres) {
    	alert(`¡El campo de asunto no debe tener más de ${nMaxCaracteres} caracteres!`);
    	return false;
  	}


	// Valida Mensaje:
	mensaje = document.getElementById("mensaje").value.trim();

	if (mensaje == "") {
		alert("¡Campo de mensaje vacío!");
		return false;
	}
	else if (mensaje.length > nMaxCarTextArea) {
    	alert(`¡El campo de asunto no debe tener más de ${nMaxCarTextArea} caracteres!`);
    	return false;
  	}


	// Si todas las validaciones pasan:
	btnEnviar.disabled = false; // Activa el botón.
	alert("Formulario enviado con éxito.");
	return true; // Permite el envío del formulario.
}



// Función que verifica si todos los campos están llenos
function verificarCampos() {
	if (campoNombre.value.trim() !== "" && 
		campoEmail.value.trim() !== "" && 
		campoAsunto.value.trim() !== "" &&
		campoMsg.value.trim() !== "") {
			btnEnviar.disabled = false; // Activa el botón
			btnEnviar.className = "contacto__boton contacto__boton--active"; // Cambia la clase del botón.
		} 
	else {
		btnEnviar.disabled = true; // Desactiva el botón si alguno está vacío
	}
}