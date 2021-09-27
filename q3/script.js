const btn =  document.querySelector('#send')

btn.addEventListener("click", function(e) {
    e.preventDefault();

    let data = document.querySelector('#data').value

    let dividirdata = data.split("/")
    let dia = dividirdata[0]
    let mes = dividirdata[1]
    let ano = dividirdata[2]

    let interromper = 0

    if (mes == "01" || mes == "03" || mes == "05" || mes == "07" || mes == "08" || mes == "10" || mes == "12") {
        if (parseInt(dia) <= 0 || parseInt(dia) > 31) {
            document.querySelector('#res').innerHTML = "Erro"
            window.alert("Dia inválido")
            interromper = 1
        } else {}
    } 
    
    if (mes == "04" || mes == "06" || mes == "09" || mes == "11") {
        if (parseInt(dia) <= 0 || parseInt(dia) > 30) {
            document.querySelector('#res').innerHTML = "Erro"
            window.alert("Dia inválido")
            interromper = 1
        } else {}
    }

    if (mes == "02") {
        if ((parseInt(ano) % 4 == 0 && parseInt(ano) % 100 != 0) || (parseInt(ano) % 400 == 0)) {
            if (parseInt(dia) <= 0 || parseInt(dia) > 29){
                document.querySelector('#res').innerHTML = "Erro"
                window.alert("Dia inválido")
                interromper = 1
            } else {}
        } else {
            if (parseInt(dia) <= 0 || parseInt(dia) > 28) {
                document.querySelector('#res').innerHTML = "Erro"
                window.alert("Dia inválido")
                interromper = 1
            } else{}
        }
    }

    if(dia.length != 2) {
        document.querySelector('#res').innerHTML = "Erro"
        window.alert("Dia inválido")
        interromper = 1
    } else {}

    if (ano.length != 4) {
        document.querySelector('#res').innerHTML = "Erro"
        window.alert("Ano inválido")
        interromper = 1
    } else {}

    if (parseFloat(dia) - parseInt(dia) != 0) {
        document.querySelector('#res').innerHTML = "Erro"
        window.alert("Dia inválido")
        interromper = 1
    } else {}

    if (parseFloat(ano) - parseInt(ano) != 0) {
        document.querySelector('#res').innerHTML = "Erro"
        window.alert("Ano inválido")
        interromper = 1
    } else {}    

    switch (mes) {
        case "01":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Janeiro de " + parseInt(ano)
            break
        case "02":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Fevereiro de " + parseInt(ano)
            break
        case "03":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Março de " + parseInt(ano)
            break
        case "04":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Abril de " + parseInt(ano)
            break
        case "05":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Maio de " + parseInt(ano)
            break
        case "06":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Junho de " + parseInt(ano)
            break
        case "07":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Julho de " + parseInt(ano)
            break
        case "08":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Agosto de " + parseInt(ano)
            break
        case "09":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Setembro de " + parseInt(ano)
            break
        case "10":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Outubro de " + parseInt(ano)
            break
        case "11":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Novembro de " + parseInt(ano)
            break
        case "12":
            if(interromper==1) {break}
            else{}
            document.querySelector('#res').innerHTML = parseInt(dia) + " de Dezembro de " + parseInt(ano)
            break
        default:             
            document.querySelector('#res').innerHTML = "Erro"
            window.alert("Mês inválido")
    }

})