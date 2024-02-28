// get input user only node

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();
// });


const prompt = require('prompt-sync') ();

const nome = prompt('Qual o seu nome?');
console.log('Olá, ' + nome + '!')



