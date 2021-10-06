const enter = document.querySelector('#button-submit')
const btn_apagar_num = document.querySelector('#button-CE')
const btn_apagar_tudo = document.querySelector('#button-C')
const btn_backspace = document.querySelector('#button-backspace')
const btn_invert = document.querySelector('#button-invertet')
const btn_virgula = document.querySelector('#button-virgula')
const btn_n1 = document.querySelector('#button-n1')
const btn_n2 = document.querySelector('#button-n2')
const btn_n3 = document.querySelector('#button-n3')
const btn_n4 = document.querySelector('#button-n4')
const btn_n5 = document.querySelector('#button-n5')
const btn_n6 = document.querySelector('#button-n6')
const btn_n7 = document.querySelector('#button-n7')
const btn_n8 = document.querySelector('#button-n8')
const btn_n9 = document.querySelector('#button-n9')
const btn_n0 = document.querySelector('#button-n0')
const btn_soma = document.querySelector('#button-soma')
const btn_sub = document.querySelector('#button-sub')
const btn_mult = document.querySelector('#button-mult')
const btn_divi = document.querySelector('#button-divi')

let equacao = document.querySelector('#equação').value
equacao = ""
btn_n1.addEventListener("click", function(event){
    event.preventDefault()
    equacao += "1"
})


