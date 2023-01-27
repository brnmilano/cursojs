let pessoa = {
    nome: "Bruno",
    idade: 29,
    profissao: "Programador",
}

console.log(pessoa.nome)

delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = false;

console.log(pessoa);

let carro = {
    portas: 2,
    portaMalas: "200 Litros",
    motor: 2.0,
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);

let objetoA = {
    portas: 2,
    portaMalas: "200 Litros",
    motor: 2.0,
}

console.log(Object.keys(objetoA))