class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }

  latir() {
    console.log("Au au");
  }

  getCor() {
    return this.cor;
  }

  setCor(cor) {
    this.cor = cor;
  }
}

let pastor = new Cachorro("Pastor Alemão", "Sem cor")

console.log(pastor);

pastor.setCor = "Marrom";

console.log(pastor.getCor());