const pessoa = {
    "nome": "Bruno Milano",
    "idade": 26,
    "profissao": "Front-End Developer",
    "hobbies": ["Jogar", "Comer", "Sair"]
}

let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto)
console.log(pessoaJson);
console.log(pessoaJson.hobbies[2]);