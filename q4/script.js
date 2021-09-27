const btn1 = document.querySelector('#send')

btn1.addEventListener("click", function(e) {
    e.preventDefault()

    let nome = document.querySelector('#nome').value
    let suco = document.querySelector('#suco')
    let refrigerante = document.querySelector('#refrigerante')
    let agua = document.querySelector('#agua')
    let bolo = document.querySelector('#bolo')
    let pastel = document.querySelector('#pastel')
    let torta = document.querySelector('#torta')

    let listaBebidas = document.querySelector('#listaBebidas')
    let listaComidas = document.querySelector('#listaComidas')
    let liBebidas = document.createElement("li")
    let liComidas = document.createElement("li")
    
    let valor = 0

    if (suco.checked==true || refrigerante.checked==true || agua.checked==true) {
        document.querySelector('#listaBebidas').innerHTML = "Bebidas consumidas:"
    }

    if (suco.checked==true) {
        valor += 5
        liBebidas.textContent = "Suco"
        listaBebidas.appendChild(liBebidas)
    }
    if (refrigerante.checked==true) {
        valor += 4,5
        liBebidas.textContent = "Refrigerante"
        listaBebidas.appendChild(liBebidas)
    }
    if (agua.checked==true) {
        valor += 1,5
        liBebidas.textContent = "Água"
        listaBebidas.appendChild(liBebidas)
    }

    if (bolo.checked==true || pastel.checked==true || torta.checked==true) {
        document.querySelector('#tituloComidas').innerHTML = "Doces e salgados consumidos:"
    }

    if (bolo.checked==true) {
        valor += 4,5
        liComidas.textContent = "Bolo"
        listaComidas.appendChild(liComidas)
    }
    if (pastel.checked==true) {
        valor += 5
        liComidas.textContent = "Pastel"
        listaComidas.appendChild(liComidas)
    }
    if (torta.checked==true) {
        valor += 6
        liComidas.textContent = "Torta"
        listaComidas.appendChild(liComidas)
    }

    if (valor == 0){
        window.alert("Nenhum produto consumido")
    } else {
        document.querySelector('#infoCliente').innerHTML = "Cliente: " + nome
        document.querySelector('#infoValor').innerHTML = "Valor: " + valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
})

const btn2 = document.querySelector('#clean')

btn2.addEventListener("click", function(e) {

})