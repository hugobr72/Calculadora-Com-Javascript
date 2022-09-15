document.addEventListener('click', function (e) {
    let el = e.target;
    const display = document.querySelector('.display')
    el = el.innerText 
    console.log(el)
    if ((isNaN(el) === false)) {
        console.log(el)
        el = parseInt(el)
    }
    if (el === 0) {
        display.innerHTML += el
    }
    if (el === 1) {
        display.innerHTML += el
    }
    if (el === 2) {
        display.innerHTML += el
    }
    if (el === 3) {
        display.innerHTML += el
    }
    if (el === 4) {
        display.innerHTML += el
    }
    if (el === 5) {
        display.innerHTML += el
    }
    if (el === 6) {
        display.innerHTML += el
    }
    if (el === 7) {
        display.innerHTML += el
    }
    if (el === 8) {
        display.innerHTML += el
    }

    if (el === 9) {
        display.innerHTML += el
    }

    if (el === 'CE') {
        display.innerHTML = ''
    }


    if (el === 'C') {
        display.innerHTML = excluirUltimoNumero(1)
    }

    if (el === '+') {
        display.innerHTML += el
    }

    if (el === '-') {
        display.innerHTML += el
    }

    if (el === '*') {
        display.innerHTML += el

    }
        if (el === '/' ) {
        console.log(el)
        display.innerHTML += el
        }

    if (el === ',') {
            el = '.'
            display.innerHTML += el
        }

    if (el === '=') {
        console.log(display.innerHTML)
        let result = resultado(display.innerHTML)
        console.log(result)
        
        display.innerHTML = result

        }
    
})

function excluirUltimoNumero(cont) {
    let textoRemovido = 0
    const numeros = display.innerHTML
    const array = []
    const arrayComMenos = []
    for (let numero of numeros) {
        array.push(numero)
    }
    const contador = array.length - cont
    for (let i = 0; i < contador; i++) {
        arrayComMenos.push(array[i])
    }
    console.log(arrayComMenos)
    for (let numero of arrayComMenos) {
        if (arrayComMenos[numero] !== '0') {
            textoRemovido += numero
        }
    }

    return textoRemovido
}

function resultado(texto){
    if (texto){
        return eval(texto)
    }
}
