// // Nullish Coalescing Operator
// const idade = 0;

// // apenas null, undefined e etc
// console.log("🚀 ~ file: main.js:4 ~ idade", idade || 'Não informado')

// // considera valor real
// console.log("🚀 ~ file: main.js:4 ~ idade", idade ?? 'Não informado')

// // Objetos

// const user = {
//     name: 'Marie',
//     age: 23,
//     // nickname: 'Marie123',
//     adress: {
//         street: 'Hampton 674',
//         number: '12'
//     },
// };

// console.log("testIn -> ", 'name' in user);
// console.log(Object.keys(user));
// console.log(Object.values(user));

// // document.body.innerText = JSON.stringify(Object.values(user));

// console.log(Object.entries(user));

// // Desestruturação

// // const adress = user.adress;
// // console.log("🚀 ~ file: main.js:34 ~ adress", adress)

// // const { adress }  = user;
// // console.log("🚀 ~ file: main.js:34 ~ adress", adress)

// // const { adress, age }  = user;
// // console.log("🚀 ~ file: main.js:38 ~  adress, age",  adress, age)

// // const { adress: endereco, age } = user;
// // console.log("🚀 ~ file: main.js:41 ~ endereco", endereco)
// // console.log("🚀 ~ file: main.js:41 ~ age", age)


// // const {adress: endereco, age, nickname = 'Person'} = user;
// // console.log("🚀 ~ file: main.js:46 ~ endereco", endereco)
// // console.log("🚀 ~ file: main.js:46 ~ age", age)
// // console.log("🚀 ~ file: main.js:46 ~ nickname", nickname)


// function mostrarIdade({ age: idade }) {
//     return idade;
// }

// console.log('mostrarIdade -> ', mostrarIdade(user));

// // Rest operator

// // const { name,age, ...rest } = user;

// // console.log('rest -> ', {rest});

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log('arrays -> ', array);
// console.log('first -> ', array[0]);
// console.log('second -> ', array[1]);

// const [first, , third, ...rest] = array;
// console.log("🚀 ~ file: main.js:71 ~ first, second, ...rest", first, third, rest);


//  short syntax

// const name = 'Marie';
// const idade = 23;

// const user= {
//     name,
//     idade
// };

// document.body.innerText = JSON.stringify(user)


// Optional Chaining


// const user = {
//     name: 'Marie',
//     age: 23,
//     nickname: 'Marie123',
//     adress: {
//         street: 'Hampton 674',
//         number: '12',
//         zip: {
//             code: '72308299',
//             city: 'Amsterdam'
//         },
//         // showFullAddress() {
//         //     return 'ok';
//         // }
//     },
// };

// const key = 'state';


// document.body.innerText = user.adress.street;
// document.body.innerText = user.adress ? user.adress.street : 'Não Informado';
// document.body.innerText = user.adress?.zip?.code ?? 'Não informado';
// document.body.innerText = user.adress?.showFullAddress?();
// document.body.innerText = user?.[key]



// document.body.innerText = user?.[key]


// Métodos de array
// map
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const i of array) {
//     document.body.innerText += i;    
// }

// array.forEach(i => {
//     document.body.innerText += i;
// });

// const novoArray = array.map(item => {
//    return item * 2;
// });

// const novoArray = array.map(item => {
//     if (item % 2 === 0) {
//         return item * 2;
//     }
//     return item;
// });

// document.body.innerText = JSON.stringify(novoArray);

// filter

// const novoArray = array.filter(item => item % 2 === 0);
// const novoArray = array.filter(item => item % 2 !== 0);

// every

// const todosItensSaoNumeros = array.every(item => typeof item === 'number');

// console.log("🚀 ~ file: main.js:154 ~ todosItensSaoNumeros", todosItensSaoNumeros);

// some
// const peloMenosUmIntemNaoEUmNumero = array.some(item => typeof item !== 'number');
// console.log("🚀 ~ file: main.js:158 ~ peloMenosUmIntemNaoEUmNumero", peloMenosUmIntemNaoEUmNumero)

// // reduce

// const soma = array.reduce((acc, item) => {
//     console.log(acc + ',' + item);
//     return acc + item;
// }, 0);


// Template Literals

// // const name = 'João';
// const name = null;
// // const message = 'Bem-vindo, ' + name
// const message = `Bem-vindo, ${name ?? 'vistante'}`

// console.log("🚀 ~ file: main.js:173 ~ message", message)


// Promise

// const somaDoisNumeros = (a, b) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(a + b);
//     }, 2000);
// });

// const somaDoisNumeros = (a, b) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve(a + b);
//         reject('ERRO');
//     }, 2000);
// })


// somaDoisNumeros(1, 2).then(
//     soma => {
//         console.log(soma);
//     }
// ).catch(err => {
//     console.log(err);
// });


// fetch('https://api.github.com/users/gustavoclay')
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// fetch('https://api.github.com/users/gustavoclay')
//     .then(response => {
//         response.text().then(body => {
//             console.log(body);
//         })
//     })
//     .catch(err => {
//         console.log(err);
//     });

// fetch('https://api.github.com/users/gustavoclay')
//     .then(response => {
//         response.json().then(body => {
//             console.log(body);
//         })
//     })
//     .catch(err => {
//         console.log(err);
//     });

// fetch('https://api.github.com/users/gustavoclay')
//     .then(response => {
//         return response.json();
//     })
//     .then(body => {
//         console.log(body);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('Finalizou');
//     });


// async function buscaDadosNoGithub() {
//     try {
//         const response = await fetch('https://api.github.com/users/gustavoclay');
//         const body = await response.json();

//         console.log(body);

//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Finalizou');
//     }
// }

// buscaDadosNoGithub();

// async function buscaDadosNoGithub() {
//     try {
//         const response = await fetch('https://api.github.com/users/gustavoclay');
//         const body = await response.json();

//         return body;
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Finalizou');
//     }
// }

// buscaDadosNoGithub().then(body => { console.log(body.name) });

// imports

// // named export
// import { soma, sub, PI } from "./lib/math";

// import sum from "./lib/sum";
// // import soma2 from "./lib/sum";


// console.log(soma(1,2));
// console.log(sub(4,2));
// console.log(PI);

// console.log(sum(1,2));

// import * as math from "./lib/math";

// console.log(math.soma(1, 2));
// console.log(math.sub(4, 2));
// console.log(math.PI);

// import { soma as sum } from "./lib/math";

// console.log(sum(1, 2));
//importando e exportando de outro arquivo
// import { soma } from "./lib/sum";

// console.log(soma(1, 2));