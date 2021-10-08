let $ = document.querySelector.bind(document)

const enter = $('#button-submit')
const btn_apagar_num = $('#button-CE')
const btn_apagar_tudo = $('#button-C')
const btn_backspace = $('#button-backspace')
const btn_invert = $('#button-invert')
const btn_virgula = $('#button-virgula')
const btn_n1 = $('#button-n1')
const btn_n2 = $('#button-n2')
const btn_n3 = $('#button-n3')
const btn_n4 = $('#button-n4')
const btn_n5 = $('#button-n5')
const btn_n6 = $('#button-n6')
const btn_n7 = $('#button-n7')
const btn_n8 = $('#button-n8')
const btn_n9 = $('#button-n9')
const btn_n0 = $('#button-n0')
const btn_soma = $('#button-soma')
const btn_sub = $('#button-sub')
const btn_mult = $('#button-mult')
const btn_divi = $('#button-divi')

function incrementar(){
    $('#expressão').value += $('#resultado').value
}

function recomecar(key){
    if (key == 1){
        $('#expressão').value = null
        $('#resultado').value = "0"
    } else {}
}

function continuar(key){
    if (aux_enter == 1){
        $('#expressão').value = null
    }
}

let aux_ope = 0
let aux_ope2 = 0
let aux_enter = 0
let aux_virg = 0

btn_n1.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "1"
    } else {
        $('#resultado').value += "1"
    } if (aux_ope == 1){
        $('#resultado').value = "1"
    } if (aux_virg == 1){
        $('#resultado').value += "1"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n2.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "2"
    } else {
        $('#resultado').value += "2"
    } if (aux_ope == 1){
        $('#resultado').value = "2"
    } 
    if (aux_virg == 1){
        $('#resultado').value += "2"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n3.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "3"
    } else {
        $('#resultado').value += "3"
    } if (aux_ope == 1){
        $('#resultado').value = "3"
    } 
    if (aux_virg == 1){
        $('#resultado').value += "3"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n4.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "4"
    } else {
        $('#resultado').value += "4"
    } if (aux_ope == 1){
        $('#resultado').value = "4"
    } 
    if (aux_virg == 1){
        $('#resultado').value += "4"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n5.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "5"
    } else {
        $('#resultado').value += "5"
    } if (aux_ope == 1){
        $('#resultado').value = "5"
    }
    if (aux_virg == 1){
        $('#resultado').value += "5"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n6.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "6"
    } else {
        $('#resultado').value += "6"
    } if (aux_ope == 1){
        $('#resultado').value = "6"
    }
    if (aux_virg == 1){
        $('#resultado').value += "6"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n7.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "7"
    } else {
        $('#resultado').value += "7"
    }if (aux_ope == 1){
        $('#resultado').value = "7"
    }
    if (aux_virg == 1){
        $('#resultado').value += "7"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n8.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "8"
    } else {
        $('#resultado').value += "8"
    } if (aux_ope == 1){
        $('#resultado').value = "8"
    }
    if (aux_virg == 1){
        $('#resultado').value += "8"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n9.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
        $('#resultado').value = "9"
    } else {
        $('#resultado').value += "9"
    } if (aux_ope == 1){
        $('#resultado').value = "9"
    }
    if (aux_virg == 1){
        $('#resultado').value += "9"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_n0.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if (eval(($('#resultado').value).replace(",", ".")) == 0){
    } else {
        $('#resultado').value += "0"
    } if (aux_ope == 1){
        $('#resultado').value = "0"
    }
    if (aux_virg == 1){
        $('#resultado').value += "0"
    } else {}
    aux_enter = 0
    aux_ope = 0
    ++aux_ope2
})

btn_virgula.addEventListener("click", function(event){
    event.preventDefault()
    recomecar(aux_enter)
    if(aux_virg == 1){
    } else {
        if (aux_ope == 1){
            $('#resultado').value = "0,"
            aux_virg = 1
        } else {
            $('#resultado').value += ","
            aux_virg = 1
        }
    }
    aux_enter = 0
    aux_ope = 0 
})

btn_soma.addEventListener("click", function(event){
    event.preventDefault() 
    if (aux_ope2 >= 2){
        incrementar()
        let num = (eval(($('#expressão').value).replace(",", "."))).toString()
        $('#resultado').value = num
        $('#resultado').value += " + "
        $('#expressão').value = null
        incrementar()
        $('#resultado').value = num
    } else {
        let num = $('#resultado').value
        $('#resultado').value += " + "
        continuar(aux_enter)
        incrementar()
        $('#resultado').value = num
    }
    aux_enter = 0
    aux_ope = 1
    aux_ope2 = 1
    aux_virg = 0
})

btn_sub.addEventListener("click", function(event){
    event.preventDefault()
    if (aux_ope2 >= 2){
        incrementar()
        let num = (eval(($('#expressão').value).replace(",", "."))).toString()
        $('#resultado').value = num
        $('#resultado').value += " - "
        $('#expressão').value = null
        incrementar()
        $('#resultado').value = num
    } else {
        let num = $('#resultado').value
        $('#resultado').value += " - "
        continuar(aux_enter)
        incrementar()
        $('#resultado').value = num
    }
    aux_enter = 0
    aux_ope = 1
    aux_ope2 = 1
    aux_virg = 0
})

btn_mult.addEventListener("click", function(event){
    event.preventDefault()
    if (aux_ope2 >= 2){
        incrementar()
        let num = (eval(($('#expressão').value).replace(",", "."))).toString()
        $('#resultado').value = num
        $('#resultado').value += " * "
        $('#expressão').value = null
        incrementar()
        $('#resultado').value = num
    } else {
        let num = $('#resultado').value
        $('#resultado').value += " * "
        continuar(aux_enter)
        incrementar()
        $('#resultado').value = num
    }
    aux_enter = 0
    aux_ope = 1
    aux_ope2 = 1
    aux_virg = 0
})

btn_divi.addEventListener("click", function(event){
    event.preventDefault()
    if (aux_ope2 >= 2){
        incrementar()
        let num = (eval(($('#expressão').value).replace(",", "."))).toString()
        $('#resultado').value = num
        $('#resultado').value += " / "
        $('#expressão').value = null
        incrementar()
        $('#resultado').value = num
    } else {
        let num = $('#resultado').value
        $('#resultado').value += " / "
        continuar(aux_enter)
        incrementar()
        $('#resultado').value = num
    }
    aux_enter = 0
    aux_ope = 1
    aux_ope2 = 1
    aux_virg = 0
})

btn_invert.addEventListener("click", function(event){
    event.preventDefault()
    let inverso = (-1)*eval($('#resultado').value)
    $('#resultado').value = inverso.toString()
})

btn_apagar_num.addEventListener("click", function(event){
    event.preventDefault()
    $('#resultado').value = "0"
})

btn_apagar_tudo.addEventListener("click", function(event){
    event.preventDefault()
    $('#resultado').value = "0"
    $('#expressão').value = null
})

btn_backspace.addEventListener("click", function(event){
    event.preventDefault()
    if (($('#resultado').value).length == 1){
        $('#resultado').value = "0"
    } else {
        $('#resultado').value = ($('#resultado').value).slice(0, -1)
    }
})

enter.addEventListener("click", function(event){
    event.preventDefault()
    incrementar()
    $('#resultado').value = ((eval(($('#expressão').value).replace(",", "."))).toString()).replace(".", ",")
    $('#expressão').value += " ="
    aux_enter = 1
    aux_virg = 0
})