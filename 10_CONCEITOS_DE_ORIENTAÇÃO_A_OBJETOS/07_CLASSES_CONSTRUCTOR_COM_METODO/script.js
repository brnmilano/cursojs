function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;

}

Cachorro.prototype.uivar = function () {
  console.log("AUUUUUUUU");
}

let pisncher = new Cachorro("Pinscher", 4, "Preto com branco")

pisncher.uivar()

console.log(pisncher);