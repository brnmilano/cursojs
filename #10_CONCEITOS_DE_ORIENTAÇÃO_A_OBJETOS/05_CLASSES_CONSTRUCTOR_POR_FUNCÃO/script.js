function criarCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function () {
    console.log("Au au");
  }
  return cachorro;
}

let pinscher = criarCachorro("Pinscher", 4, "Preto com branco");

console.log(pinscher);

pinscher.latir()