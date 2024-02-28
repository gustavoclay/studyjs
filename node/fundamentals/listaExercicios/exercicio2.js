/*
2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos.Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
  a.Bônus: A soma dos números não pode passar o total de eleitores
  . */
const prompt = require('prompt-sync')();

console.log("Calculadora de Porcentagem");
const totalEleitores = parseInt(prompt("Total de Eleitores: "));
const votosBrancos = parseInt(prompt("Votos Brancos: "));
const votosNulos = parseInt(prompt("Votos Nulos: "));
const votosValidos = parseInt(prompt("Votos Validos: "));

const porcentagemVotosBrancos = (votosBrancos / totalEleitores) * 100;
const porcentagemVotosNulos = (votosNulos / totalEleitores) * 100;
const porcentagemVotosValidos = (votosValidos / totalEleitores) * 100;

console.log("Porcentagem de Votos Brancos: " + porcentagemVotosBrancos + "%");
console.log("Porcentagem de Votos Nulos: " + porcentagemVotosNulos + "%");
console.log("Porcentagem de Votos Validos: " + porcentagemVotosValidos + "%");




