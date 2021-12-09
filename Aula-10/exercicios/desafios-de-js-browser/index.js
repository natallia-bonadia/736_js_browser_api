// Desafio 1

// duplicar sem cloneNode

const containerLi1 = document.querySelector('#li-1')
const duplicateButton = containerLi1.querySelector('[data-duplicate-button]')
const originalText = containerLi1.querySelector('[data-duplicate-text]')

duplicateButton.onclick = function() {
    const newTextP = document.createElement('p')
    newTextP.innerText = originalText.innerText

    containerLi1.appendChild(newTextP)
    
}

// duplicar com cloneNode

// const containerLi = document.querySelector('#li-1')
// const duplicateButton = document.querySelector('[data-duplicate-button]')
// const originalText = document.querySelector('[data-duplicate-text]')

// duplicateButton.onclick = function() {
//     const duplicateText = originalText.cloneNode(true)
//     containerLi.appendChild(duplicateText)
// }

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