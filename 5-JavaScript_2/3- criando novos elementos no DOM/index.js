function addInput() {
  const ul = document.getElementById('inputs')

  const newLi = document.createElement('li')
  newLi.className = 'listItem'
  newLi.id = 'listID'
  // Evitar usar innerHTML por questões de segurança
  // newLi.innerHTML = '<span>item 1</span>'
  newLi.innerText = 'Novo input: '

  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'

  newLi.appendChild(newInput)
  ul.appendChild(newLi)



  
}
