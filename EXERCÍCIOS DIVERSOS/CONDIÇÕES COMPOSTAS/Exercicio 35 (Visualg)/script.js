function myFunction() {
  const tipoDeCarro = prompt("Qual tipo de carro você quer alugar? ");

  const kmPercorrido = prompt("Quandos KM's você percorreu? ");

  const diasAlugado = prompt("Quandos dias o carro ficou alugado? ");

  if (tipoDeCarro === "Popular" && kmPercorrido < 100) {
    const valorTotal = (kmPercorrido * 0.20) + 90

    console.log(`O valor total a pagar é de R$ ${valorTotal}`);
  } else if (tipoDeCarro === "Popular" && kmPercorrido > 100) {
    const valorTotal = (kmPercorrido * 0.10) + 90

    console.log(`O valor total a pagar é de R$ ${valorTotal}`);
  } else if (tipoDeCarro === "Luxo" && kmPercorrido < 100) {
    const valorTotal = (kmPercorrido * 0.30) + 150

    console.log(`O valor total a pagar é de R$ ${valorTotal}`);
  } else {
    const valorTotal = (kmPercorrido * 0.25) + 150

    console.log(`O valor total a pagar é de R$ ${valorTotal}`);
  }
}