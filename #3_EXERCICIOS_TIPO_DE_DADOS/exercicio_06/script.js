const velocidade = 80

if (velocidade >= 80) {
    multa = velocidade * 5
    console.log("Você está acima de velocidade");
    console.log(`Você foi multado!, ${multa}`);
} else {
    console.log("Você está dentro da velocidade");
}