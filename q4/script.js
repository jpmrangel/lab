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

    if(nome != ''){
        /////////////
        //Bebidas////
        /////////////
    
        if (suco.checked==true || refrigerante.checked==true || agua.checked==true) {
            listaBebidas.innerHTML = "Bebidas consumidas: "
            if (suco.checked==true) {
                valor += 5
                liBebidas = document.createElement("li")
                liBebidas.textContent = "Suco"
                listaBebidas.appendChild(liBebidas)
            }
            if (refrigerante.checked==true) {
                valor += 4,5
                liBebidas = document.createElement("li")
                liBebidas.textContent += "Refrigerante"
                listaBebidas.appendChild(liBebidas)
            }
            if (agua.checked==true) {
                valor += 1,5
                liBebidas = document.createElement("li")
                liBebidas.textContent = "Água"
                listaBebidas.appendChild(liBebidas)
            }
        }

        //////////////
        //Comidas////
        /////////////

        if (bolo.checked==true || pastel.checked==true || torta.checked==true) {
            listaComidas.innerHTML = "Doces e salgados consumidos: "
            if (bolo.checked==true) {
                valor += 4,5
                liComidas = document.createElement("li")
                liComidas.textContent = "Bolo"
                listaComidas.appendChild(liComidas)
            }
            if (pastel.checked==true) {
                valor += 5
                liComidas = document.createElement("li")
                liComidas.textContent = "Pastel"
                listaComidas.appendChild(liComidas)
            }
            if (torta.checked==true) {
                valor += 6
                liComidas = document.createElement("li")
                liComidas.textContent = "Torta"
                listaComidas.appendChild(liComidas)
            }
        }
    }
    ///////////////
    ///Resultado///
    ///////////////

    if (nome != '' && valor != 0) {
        document.querySelector('#comanda').innerHTML = "- Comanda -"
        document.querySelector('#infoCliente').innerHTML = "Cliente: " + nome
        document.querySelector('#infoValor').innerHTML = "Valor: " + valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    if (nome == ''){
        window.alert("Nenhum nome informado")
    }
    if (suco.checked==false && refrigerante.checked==false && agua.checked==false && bolo.checked==false && pastel.checked==false && torta.checked==false){
        window.alert("Nenhum produto consumido")
    }
})

    //////////////
    ///Limpar/////
    //////////////

const btn2 = document.querySelector('#clean')

btn2.addEventListener("click", function(e) {
    document.querySelector('#comanda').innerHTML = null
    document.querySelector('#infoCliente').innerHTML = null
    document.querySelector('#listaBebidas').innerHTML = null
    document.querySelector('#listaComidas').innerHTML = null
    document.querySelector('#infoValor').innerHTML = null
})
