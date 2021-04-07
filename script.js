var resultado = document.getElementById('ent')
var c = 0
var n1 = 0
var n2 = 0
var temp = 0
var tipo = ``
var deci = false

function clearAll() { // vai limpar todos os dados 
    resultado.value = ``
    var c = 0
    var n1 = 0
    var n2 = 0
    var temp = 0
    var tipo = ``
    var deci = false
}

function igual() { //Verifica operador faz a conta de acordo com o mesmo
    if (tipo === `adicao`) {
        n2 = resultado.value 
        temp = parseFloat(n1) + parseFloat(n2)
        resultado.value = `${temp}`
        n1 = resultado.value
        c = 0 
    } else if (tipo === `subtracao`) {
        n2 = resultado.value
        temp = parseFloat(n1) - parseFloat(n2)
        resultado.value = `${temp}`
        n1 = resultado.value
        c = 0 
    } else if (tipo === `multi`) {
        n2 = resultado.value
        temp = parseFloat(n1) * parseFloat(n2)
        resultado.value = `${temp}`
        n1 = resultado.value
        c = 0 
    } else if (tipo === `divi`) {
        n2 = resultado.value
        temp = parseFloat(n1) / parseFloat(n2)
        resultado.value = `${temp}`
        n1 = resultado.value
        c = 0 
    } else if (tipo === `porcentagem`) {
        temp = (parseFloat(n2)*parseFloat(n1))/100
        resultado.value = `${temp}`
        n1 = resultado.value
        c = 0 
    } else {
        alert (`Alan, voce errou em alguma coisa`)
    }
}

function ponto() {
    deci = true 
    if (c == 0) {
        n1 = resultado.value 
        parseFloat(n1).toFixed(2)
        resultado.value = parseFloat(n1).toFixed(0)
    } else if (c == 1) {
        n2 = resultado.value 
        parseFloat(n2).toFixed(2)
        resultado.value = parseFloat(n2).toFixed(0)
    } else {
        alert (`A variavel C esta com algum problema em PONTO`)
    }
}

function adicao() {
    n1 = resultado.value
    resultado.value = ``
    tipo = `adicao`
    c++
    alert (`n1 = ${n1}`)
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
    if (c == 0) {
        n1 = resultado.value
        n1 = n1 - (n1*2)
        resultado.value = n1
    } else if (c == 1) {
        n2 = resultado.value
        n2 = n2 - (n2*2)
        resultado.value = n2
    } else {
        alert (`A variavel C esta com algum problema em INVERSAO`)
    }
}

function add1() { 
    if (deci) {
        resultado.value += `.1`
        deci = false    
    } else {
        resultado.value += `1`
    }
}
function add2() {
    if (deci) {
        resultado.value += `.2`
        deci = false    
    } else {
        resultado.value += `2`
    }   
}
function add3() { 
    if (deci) {
        resultado.value += `.3`
        deci = false    
    } else {
        resultado.value += `3`
    }
} 
function add4() { 
    if (deci) {
        resultado.value += `.4`
        deci = false    
    } else {
        resultado.value += `4`
    }
} 
function add5() { 
    if (deci) {
        resultado.value += `.5`
        deci = false    
    } else {
        resultado.value += `5`
    }
} 
function add6() { 
    if (deci) {
        resultado.value += `.6`
        deci = false    
    } else {
        resultado.value += `6`
    }
} 
function add7() { 
    if (deci) {
        resultado.value += `.7`
        deci = false    
    } else {
        resultado.value += `7`
    }
} 
function add8() { 
    if (deci) {
        resultado.value += `.8`
        deci = false    
    } else {
        resultado.value += `8`
    }
} 
function add9() { 
    if (deci) {
        resultado.value += `.9`
        deci = false    
    } else {
        resultado.value += `9`
    }
} 
function add0() { 
    if (deci) {
        resultado.value += `.0`
        deci = false    
    } else {
        resultado.value += `0`
    }
} 