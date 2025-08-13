const { calcularNotaA1, calcularNotaA2, calcularNotaFinal, calcularNotaA1Final, calcularNotaA2Final } = require('./CalculadoraNota.js');

const prompt = require('prompt-sync')();

const nome = prompt("Qual é o seu nome? ");
console.log(`Olá, ${nome}!`);
console.log("Seja bem-vindo(a) ao Node.js!");

const idade = prompt("Qual é a sua idade? ");
console.log(`Você tem ${idade} anos.`);

console.log("Vamos calcular suas notas!");
const provaA1 = parseFloat(prompt("Digite a nota da Prova A1: "));
const trabalhoA1 = parseFloat(prompt("Digite a nota do Trabalho A1: "));
const exercicioA1 = parseFloat(prompt("Digite a nota do Exercício A1: "));

const notaA1 = calcularNotaA1(provaA1, trabalhoA1, exercicioA1);
console.log(`Sua nota A1 é: ${notaA1.toFixed(2)}`);

const provaA2 = parseFloat(prompt("Digite a nota da Prova A2: "));
const trabalhoA2 = parseFloat(prompt("Digite a nota do Trabalho A2: "));
const exercicioA2 = parseFloat(prompt("Digite a nota do Exercício A2: "));

const notaA2 = calcularNotaA2(provaA2, trabalhoA2, exercicioA2);
console.log(`Sua nota A2 é: ${notaA2.toFixed(2)}`);

// Cálculo da nota final
console.log("Calculando sua nota final...");
console.log("Média ponderada das notas A1 e A2:");
console.log("A1: 40% e A2: 60%");
const notaA1Final = calcularNotaA1Final(notaA1);
console.log(`Sua nota A1 final é: ${notaA1Final.toFixed(2)}`);

const notaA2Final = calcularNotaA2Final(notaA2);
console.log(`Sua nota A2 final é: ${notaA2Final.toFixed(2)}`);

const notaFinal = calcularNotaFinal(notaA1, notaA2);
console.log(`Sua nota final é: ${notaFinal.toFixed(2)}`);

if (notaFinal >= 5) {
  console.log("Parabéns! Você foi aprovado(a)!");
} else {
  console.log("Infelizmente, você não foi aprovado(a).");
}

console.log("Obrigado por usar o sistema de cálculo de notas!");

