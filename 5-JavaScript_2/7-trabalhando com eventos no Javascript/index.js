function register(ev) {
  console.log(ev)
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConf = sectionElement.children.passwordConf.value

  if (password === passwordConf) {
    alert('Usuário ' + username + ' registrado!!')
  } else {
    alert('As senhas não conferem!')
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeList() {
  button.removeEventListener('click', register)
  alert('Event Remove')
}

button.addEventListener('mouseover', function (ev) {
  console.log(ev.currentTarget)
})
