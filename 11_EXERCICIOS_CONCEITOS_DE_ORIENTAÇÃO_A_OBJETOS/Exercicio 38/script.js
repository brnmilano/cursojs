class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let novoEndereco = new Endereco("Rua 01", "Taguatinga", "Brasília", "DF");

console.log(novoEndereco);

novoEndereco.novaRua = "Rua José Pinto Coimbra";

novoEndereco.novoBairro = "Planalto";

novoEndereco.novaCidade = "Presidente Olegário";

novoEndereco.novoEstado = "Minas Gerais";

console.log(novoEndereco);

novoEndereco.novaRua = "Rua Dr. Marcelo Milano";

novoEndereco.novoBairro = "Caiçaras";

novoEndereco.novaCidade = "Patos de Minas";

novoEndereco.novoEstado = "Minas Gerais";

console.log(novoEndereco);
