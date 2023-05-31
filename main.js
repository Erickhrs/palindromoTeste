let in_v = document.getElementById("valor");
let resposta = document.getElementById("resposta");



function validar() {
    let valor = in_v.value;
    let vinv = valor.split('').reverse().join('');

    if (valor == vinv){
       resposta.innerHTML = (`${valor} é um polídromo!`)
       resposta.style.color = "chartreuse"
    }
    else{
        resposta.innerHTML = (`${valor} não é um polídromo!`)
        resposta.style.color = "red"
    }
}