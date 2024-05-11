//elementos capturados do HTML
const divRelogio = document.querySelector



let numeroAleatorio;

numeroAleatorio = Math.floor(Math.random() * 10);

console.log(`Número aleatorio: ${numeroAleatorio}`);

let numeroPiso;

numeroPiso = Math.floor(4.89);

console.log(`Número piso: ${numeroPiso}`);

const dataInicial = new Date();
console.log(dataInicial);
console.log(dataInicial.getHours());
console.log(dataInicial.getMonth());

function atualizaRelogio () {
    const dataAtual = new Date();
    let horas = dataAtual.getHours();
    horas = adicionaZero(horas);
    let minutos = dataAtual.getMinutes();
    minutos = adicionaZero(minutos);
    let segundos = dataAtual.getSeconds();
    segundos = adicionaZero(segundos);
    
    console.log(`${horas}:${minutos}:${segundos}`);
}

atualizaRelogio();

const relogio = setInterval(function () {
    atualizaRelogio();
}, 1000);

setTimeout(function () {
    clearInterval(relogio);
}, 10000);

function adicionaZero (numero){
    if(numero < 10){
        numero = '0' + numero;
    }

    return numero;
}