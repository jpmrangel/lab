const btn =  document.querySelector('#send')

btn.addEventListener("click", function(e) {
    e.preventDefault();

    let num1 = parseFloat(document.querySelector('#num1').value)
    let num2 = parseFloat(document.querySelector('#num2').value)

    //soma
    let soma = num1 + num2
    if (num2 < 0) {
        document.querySelector('#membrosSoma').innerHTML = num1 + " + (" + num2 + ")"
    } else {
        document.querySelector('#membrosSoma').innerHTML = num1 + " + " + num2
    }
    document.querySelector('#resSoma').innerHTML = soma
    
    //produto
    let produto = num1 * num2
    if (num2 < 0){
        document.querySelector('#membrosProduto').innerHTML = num1 + " * (" + num2 + ")"
    } else {
        document.querySelector('#membrosProduto').innerHTML = num1 + " * " + num2
    }
    document.querySelector('#resProduto').innerHTML = produto
    
    //divisão
    let divisao = num1 / num2
    if (num2 < 0){
        document.querySelector('#membrosDivisao').innerHTML = num1 + " / (" + num2 + ")"
    } else {
        document.querySelector('#membrosDivisao').innerHTML = num1 + " / " + num2
    }
    if (num2 == 0) {
        document.querySelector('#resDivisao').innerHTML = "Indefinido"
    } else {
        document.querySelector('#resDivisao').innerHTML = divisao
    }

    //resto
    let resto = num1 % num2
    if (num2 < 0){
        document.querySelector('#membrosResto').innerHTML = num1 + " % (" + num2 + ")"
    } else {
        document.querySelector('#membrosResto').innerHTML = num1 + " % " + num2
    }
    if (num2 == 0) {
        document.querySelector('#resResto').innerHTML = "Indefinido"
    } else {
        document.querySelector('#resResto').innerHTML = resto
    }

})