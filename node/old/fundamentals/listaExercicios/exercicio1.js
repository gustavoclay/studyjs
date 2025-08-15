/*
 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
  a.Bônus: nenhuma nota pode passar de 10.
  */

const prompt = require('prompt-sync')();

console.log("Calculadora de Média");
const nota1 = parseFloat(prompt("Primeira nota: ").replace(",", "."));
const nota2 = parseFloat(prompt("Primeira nota: ").replace(",", "."));
const nota3 = parseFloat(prompt("Primeira nota: ").replace(",", "."));
const nota4 = parseFloat(prompt("Primeira nota: ").replace(",", "."));

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("Media: " + media);

if(media >= 7.0) {
  console.log("Aprovado");
} else if(media < 7.0) {
  console.log("Reprovado");
}

