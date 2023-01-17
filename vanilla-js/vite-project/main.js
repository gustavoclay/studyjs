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







