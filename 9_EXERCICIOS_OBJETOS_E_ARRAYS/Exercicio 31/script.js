const muitosNomes = ["Bruno", "Denis", "Felipe", "Ramon", "Jonata", "Marcos", "James", "Messi"]

const poucosNomes = ["Leandro", "Adriana", "Mateus"]

function verificaElementos(array) {
    if (array.length >= 5) {
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
}

verificaElementos(muitosNomes)
verificaElementos(poucosNomes)