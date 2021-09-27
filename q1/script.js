const btn =  document.querySelector('#send');

btn.addEventListener("click", function(e) {
    e.preventDefault();

    let codigo = parseInt(document.querySelector('#codigo').value);
    let quantidade = parseInt(document.querySelector('#quantidade').value); 

    switch(codigo){
        case 100:
            valor = (1.20*quantidade);
            break;
        case 101:
            valor = (1.30*quantidade);
            break;
        case 102:
            valor = (1.50*quantidade);
            break;
        case 103:
            valor = (1.20*quantidade);
            break;
        case 104:
            valor = (1.30*quantidade);
            break;
        case 105:
            valor = (1.00*quantidade);
            break;
        default: alert("Algo deu errado :(");
    }
    
    document.querySelector('#res').innerHTML = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});