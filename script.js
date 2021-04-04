var resultado = document.getElementById('ent')
var c = 0
var n1 = 0
var n2 = 0
var temp = 0
var tipo = ``

function clearAll() { // vai limpar todos os dados 
    resultado.value = ``
    tipo = ``
    c = 0
}

function igual() { //Verifica operador faz a conta de acordo com o mesmo
        n2 = resultado.value
    if (tipo === `adicao`) {
        temp = parseFloat(n1) + parseFloat(n2)
        resultado.value = `${temp}`
        n1 = resultado.value
    } else if (tipo === `subtracao`) {
        temp = parseFloat(n1) - parseFloat(n2)
        resultado.value = `${temp}`
        n1 = resultado.value
    } else if (tipo === `multi`) {
        temp = parseFloat(n1) * parseFloat(n2)
        resultado.value = `${temp}`
        n1 = resultado.value
    } else if (tipo === `divi`) {
        temp = parseFloat(n1) / parseFloat(n2)
        resultado.value = `${temp}`
        n1 = resultado.value
    } else if (tipo === `porcentagem`) {
        temp = (parseFloat(n2)*parseFloat(n1))/100
        resultado.value = `${temp}`
        n1 = resultado.value
    } else {
        alert (`Alan, voce errou em alguma coisa`)
    }
}

function ponto() {
    n1 = resultado.value 
    parseFloat(n1.toFixed(2))
    resultado.innerHTML += `.`
}

function adicao() {
    n1 = resultado.value
    resultado.value = ``
    tipo = `adicao`
    if (c>=1) {
        igual()
    }
} 

function subtracao() {
    n1 = resultado.value
    resultado.value = ``
    c++
    tipo = `subtracao`
}

function multiplicacao() {
    n1 = resultado.value
    resultado.value = ``
    c++
    tipo = `multi`
}

function divisao() {
    n1 = resultado.value
    resultado.value = ``
    c++
    tipo = `divi`
}

function porcentagem() {
    n1 = resultado.value 
    resultado.value = ``
    c++
    tipo = `porcentagem`
}

function inversao() {
    n1 = resultado.value
    n1 = n1 - (n1*2)
    resultado.value = n1
}

function add1() { 
    resultado.value += `1`
}
function add2() {
    resultado.value += `2`
} 
function add3() { 
    resultado.value += `3`
} 
function add4() { 
    resultado.value += `4`
} 
function add5() { 
    resultado.value += `5`
} 
function add6() { 
    resultado.value += `6`
} 
function add7() { 
    resultado.value += `7`
} 
function add8() { 
    resultado.value += `8`
} 
function add9() { 
    resultado.value += `9`
} 
function add0() { 
    resultado.value += `0`
} 