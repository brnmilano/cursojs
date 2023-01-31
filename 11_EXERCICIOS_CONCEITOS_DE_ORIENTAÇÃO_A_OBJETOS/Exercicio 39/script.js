class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(litros) {
        this.gasolinaRestante -= litros;
    }
}

let carro = new Carro("Fiat", "Verde Lodo", 100, 15);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);