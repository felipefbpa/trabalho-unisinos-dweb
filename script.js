//navbar

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

//mascara telefone

const telefone = document.querySelector('#telefone')

telefone.addEventListener('focus', () => {
  telefone.value = '('

})

telefone.addEventListener('focusout', () => {
  if (telefone.value == '(') {

    telefone.value = ''
  }

})

telefone.addEventListener('keydown', (event) => {
  let telefoneComprimento = telefone.value.length
  if (telefoneComprimento === 1) {
    if (event.keyCode === 8) {
      event.preventDefault()
      return false
    }
  }

})

telefone.addEventListener('keypress', (event) => {
  let telefoneComprimento = telefone.value.length

  let oQueOUsuarioDigitou = String.fromCharCode(event.which)
  let caracteresPermitidos = "1234567890"
  if (caracteresPermitidos.indexOf(oQueOUsuarioDigitou) < 0) {
    event.preventDefault()
    return false
  }

  if (telefoneComprimento === 3) {
    telefone.value = telefone.value + ') '
  }

  if (telefoneComprimento === 10) {
    telefone.value = telefone.value + '-'
  }

})