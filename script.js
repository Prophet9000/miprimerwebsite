function showAlert() { alert('¡Hola, esta es una alerta desde JavaScript!'); }

const form = document.getElementById("myForm")

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}
function validateEmail() {
  const input = document.getElementById("email")
  const inputValue = input.value

  if(!validateEmail(inputValue)) {
      alert('Por favor ingrese un correo electrónico válido.')
  } else {
      alert('Correo elctrónico enviado correctamente.')
  }
}

/* form.addEventListener("submit", function(lala) {
    lala.preventDefault()
    validateForm();
}) */

document.querySelector("button.button-menu-toggle")
.addEventListener("click", ()=> {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")})
