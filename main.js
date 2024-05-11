//elementos capturados do HTML
const divRelogio = document.querySelector('.relogio');
const inputNome = document.querySelector('.inputNome');
const inputPeso = document.querySelector('.inputPeso');
const inputAltura = document.querySelector('.inputAltura');
const botao = document.querySelector('button');
const divResultado = document.querySelector('.resultado');

let nome;
let peso;
let altura;

let numeroAleatorio;

numeroAleatorio = Math.floor(Math.random() * 10);

console.log(`Número aleatorio: ${numeroAleatorio}`);

let numeroPiso;

numeroPiso = Math.floor(4.89);

console.log(`Número piso: ${numeroPiso}`);

botao.addEventListener('click', function (evento){
    evento.preventDefault();

    nome = inputNome.value;
    peso = Number(inputPeso.value);
    altura = Number(inputAltura.value);

    let resultado = calculaIMC(peso, altura);
    console.log(resultado);
});

function calculaIMC (peso, altura) {
    let imc = peso/(altura * altura);
    return imc;
}

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
    
    divRelogio.innerHTML = (`${horas}:${minutos}:${segundos}`);
}

atualizaRelogio();

const relogio = setInterval(function () {
    atualizaRelogio();
}, 1000);

/*
setTimeout(function () {
    clearInterval(relogio);
}, 10000);
*/

function adicionaZero (numero){
    if(numero < 10){
        numero = '0' + numero;
    }

    return numero;
}