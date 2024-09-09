const RecintosZoo = require('./RecintosZoo');

const zoo = new RecintosZoo();

// Teste 1: Adicionar 2 macacos ao recinto
const resultado1 = zoo.analisaRecintos('MACACO', 2);
console.log(resultado1);

// Teste 2: Adicionar 1 leão ao recinto
const resultado2 = zoo.analisaRecintos('LEAO', 1);
console.log(resultado2);

// Teste 3: Adicionar 3 hipopótamos ao recinto
const resultado3 = zoo.analisaRecintos('HIPOPOTAMO', 3);
console.log(resultado3);

// Teste 4: Adicionar 1 leopardo ao recinto (deve retornar erro)
const resultado4 = zoo.analisaRecintos('LEOPARDO', 1);
console.log(resultado4);

// Teste 5: Adicionar 12 macacos ao recinto (deve retornar erro)
const resultado5 = zoo.analisaRecintos('MACACO', 12);
console.log(resultado5);