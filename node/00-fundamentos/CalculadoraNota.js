
function calcularNotaA1(prova, trabalho, exercicio){
  return prova + trabalho + exercicio;
}

function calcularNotaA2(prova, trabalho, exercicio){
  return prova + trabalho + exercicio;
}

function calcularNotaA1Final(notaA1){
  return notaA1 * 0.4;
}

function calcularNotaA2Final(notaA2){
  return notaA2 * 0.6;
}

function calcularNotaFinal(notaA1, notaA2){
  return (notaA1*0.4) + (notaA2*0.6);
}

module.exports = {
  calcularNotaA1,
  calcularNotaA2,
  calcularNotaFinal,
  calcularNotaA1Final,
  calcularNotaA2Final
}
