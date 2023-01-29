const cachorro = {
    latir: function () {
        console.log("Au au");
    },
    dormir: function () {
        console.log("zzZZzz");
    }
}

cachorro.latir()
cachorro.dormir()

// ------------

const dog = {
    raca: "SRD",
    setRaca: function (raca) {
        this.raca = raca;
    },
    getRaca: function () {
        return "A raça do cachorro é " + this.raca
    }
}

console.log(dog.raca);

dog.setRaca('Pinscher');

console.log(dog.raca);

console.log(dog.getRaca());