// Desafio 1

// duplicar sem cloneNode

// const containerLi1 = document.querySelector('#li-1')
// const duplicateButton = containerLi1.querySelector('[data-duplicate-button]')
// const originalText1 = containerLi1.querySelector('[data-duplicate-text]')

// duplicateButton.onclick = function() {
//     const newTextP1 = document.createElement('p')
//     newTextP1.innerText = originalText1.innerText

//     containerLi1.appendChild(newTextP1)   
// }

// duplicar com cloneNode

const containerLi1 = document.querySelector('#li-1')
const duplicateButton = document.querySelector('[data-duplicate-button]')
const originalText1 = document.querySelector('[data-duplicate-text]')

duplicateButton.onclick = function() {
    const duplicateText = originalText1.cloneNode(true)
    containerLi1.appendChild(duplicateText)
}

// Desafio 2

const containerLi2 = document.querySelector('#li-2')
const deleteButton = containerLi2.querySelector('[data-delete-button]')
const deleteText = containerLi2.querySelector('[data-delete-text]')

deleteButton.onclick = function() {
    if(!containerLi2.querySelector('[data-delete-text]')) {
        return
    }
    containerLi2.removeChild(deleteText)
}

// Desafio 3

const containerLi3 = document.querySelector('#li-3')
const colorButton = containerLi3.querySelector('[data-color-button]')
const colorText = containerLi3.querySelector('[data-color-text]')

colorButton.onclick = function() {
    if(colorText.style.color = 'steelblue') {
        return
    }
    colorText.style.color = 'steelblue'
}

// Desafio 4

// Modificando pelo CSS

const containerLi4 = document.querySelector('#li-4')
const italicButton = containerLi4.querySelector('[data-italic-button]')
const italicText = containerLi4.querySelector('[data-italic-text]')

italicButton.onclick = function() {
    if (italicText.style.fontStyle !== 'italic') {
        italicText.style.fontStyle = 'italic'
        italicButton.innerText = 'Tornar normal'
        italicText.innerText = 'Me deixe normal'
        return
    }
    italicText.style.fontStyle = 'normal'
    italicButton.innerText = 'Tornar itálico'
    italicText.innerText = 'Me deixe itálico'  
}

// Modificando pela tag HTML

// const containerLi4 = document.querySelector('#li-4')
// const italicButton = containerLi4.querySelector('[data-italic-button]')
// const italicText = containerLi4.querySelector('[data-italic-text]')

// italicButton.onclick = function() {
//     const newItalicText = document.createElement('i')
//     newItalicText.innerText = italicText.innerText

//     containerLi4.removeChild(italicText)
//     containerLi4.appendChild(newItalicText)
// }

// Desafio 5

// const containerLi5 = document.querySelector('#li-5')
// const stylizeButton = containerLi5.querySelector('[data-stylize-button]')
// const stylizeText = containerLi5.querySelector('[data-stylize-text]')

// Resolução sem toogle (forma mais verbosa)

// stylizeButton.onclick = function() {
//   if (stylizeButton.innerText === 'Estilizar') {
//     stylizeText.style.backgroundColor = 'violet'
//     stylizeText.style.color = 'white'
//     stylizeText.style.textDecoration = 'underline'
//     stylizeText.style.fontSize = '2.2rem'
//     stylizeText.style.padding = '0.4rem 1.2 rem'

//     stylizeButton.innerText = 'Tirar estilos'
//     stylizeText.innerText = 'Me deixe sem estilo'

//     return
//   }
//   stylizeText.style.all = 'initial'
// }

// Resolução com toogle

const containerLi5 = document.querySelector('#li-5')
const stylizeButton = containerLi5.querySelector('[data-stylize-button]')
const stylizeText = containerLi5.querySelector('[data-stylize-text]')

stylizeButton.onclick = function() {
  stylizeText.classList.toggle('stylized-button-challenge-5')
  if (stylizeText.classList.contains('stylized-button-challenge-5')) {
    stylizeButton.innerText = 'Tirar estilos'
    stylizeText.innerText = 'Me deixe sem estilo'
    return
  }
  stylizeButton.innerText = 'Estilizar'
  stylizeText.innerText = 'Me deixe estilizado'
}

// Desafio 6

// Resolução com função anônima

// const containerLi6 = document.querySelector('#li-6')
// const form = containerLi6.querySelector('[data-spoof-form]')

// form.onsubmit = function(event) {
//   event.preventDefault()
// }

// Resolução sem função anônima

const containerLi6 = document.querySelector('#li-6')
const form6 = containerLi6.querySelector('[data-spoof-form]')

function handleSubmitForm(event) {
  event.preventDefault()
}

form6.onsubmit = handleSubmitForm

// quando o onsubmit for executado, por debaixo dos panos no JavaScript acontecerá a passagem do parâmetro event ao executar a função definida handleSubmitForm(event)

// Desafio 7

const containerLi7 = document.querySelector('#li-7')
const checkboxColorizeBg = containerLi7.querySelector('#checkbox-color')
// outra forma de selecionar via type
//const checkboxColorizeBg = containerLi7.querySelector('input[type="checkbox"]')

checkboxColorizeBg.onchange = function(event) {
  if (event.target.checked) {
    document.body.style.backgroundColor = 'cornflowerblue'
    return
  }
  document.body.style.backgroundColor = '#333'
}

// Desafio 8

const containerLi8 = document.querySelector('#li-8')
const pickedColorizeBg = containerLi8.querySelector('#color-picker')

pickedColorizeBg.onchange = function(event) {
  const color = event.target.value

  document.body.style.backgroundColor = color
}

// Desafio 9

const containerLi9 = document.querySelector('#li-9')
const form9 = containerLi9.querySelector('form')
const avatarUrlInput = containerLi9.querySelector('#avatar-url-input')
const photoContainer = containerLi9.querySelector('[data-photos-container]')

form9.onsubmit = function(event) {
  event.preventDefault()
  const photoUrl = avatarUrlInput.value
  const img = document.createElement('img')
  img.src = photoUrl

  // limpando input de URL
  avatarUrlInput.value = ''

  photoContainer.appendChild(img)
}

// Desafio 10

const containerLi10 = document.querySelector('#li-10')
const buttonIncrease = containerLi10.querySelector('[data-increase-count]')
const buttonDecrease = containerLi10.querySelector('[data-decrease-count]')
const countStrong = containerLi10.querySelector('[data-count]')
let count = 0

buttonIncrease.onclick = function() {
  count++
  countStrong.innerText = count
}

buttonDecrease.onclick = function() {
  if (count === 0) {
    return
  }

  count--
  countStrong.innerText = count
}