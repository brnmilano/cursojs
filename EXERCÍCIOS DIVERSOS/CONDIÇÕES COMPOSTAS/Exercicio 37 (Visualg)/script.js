function enviar() {
  let genero = document.getElementById("genero").value;

  let salarioAtual = document.getElementById("salarioAtual").value;

  let anosNaEmpresa = document.getElementById("anosNaEmpresa").value;


  // VERIFICAÇÕES PARA CALCULAR NOVO SALÁRIO
  if (genero === "Mulher" && anosNaEmpresa < 15) {
    let porcentagem = 0.05

    let salarioFormatado = parseInt(salarioAtual)

    let aumento = salarioFormatado * porcentagem

    let novoSalario = salarioFormatado + aumento

    console.log(`Seu novo salário é ${novoSalario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);

  } else if (genero === "Mulher" && (anosNaEmpresa > 15 && anosNaEmpresa < 20)) {
    let porcentagem = 0.12

    let salarioFormatado = parseInt(salarioAtual)

    let aumento = salarioFormatado * porcentagem

    let novoSalario = salarioFormatado + aumento

    console.log(`Seu novo salário é ${novoSalario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);

  } else if (genero === "Mulher" && anosNaEmpresa > 20) {
    let porcentagem = 0.23

    let salarioFormatado = parseInt(salarioAtual)

    let aumento = salarioFormatado * porcentagem

    let novoSalario = salarioFormatado + aumento

    console.log(`Seu novo salário é ${novoSalario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);

  } else if (genero === "Homem" && anosNaEmpresa < 15) {
    let porcentagem = 0.03

    let salarioFormatado = parseInt(salarioAtual)

    let aumento = salarioFormatado * porcentagem

    let novoSalario = salarioFormatado + aumento

    console.log(`Seu novo salário é ${novoSalario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
  } else if (genero === "Homem" && (anosNaEmpresa > 15 && anosNaEmpresa < 20)) {
    let porcentagem = 0.13

    let salarioFormatado = parseInt(salarioAtual)

    let aumento = salarioFormatado * porcentagem

    let novoSalario = salarioFormatado + aumento

    console.log(`Seu novo salário é ${novoSalario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
  } else {
    let porcentagem = 0.25

    let salarioFormatado = parseInt(salarioAtual)

    let aumento = salarioFormatado * porcentagem

    let novoSalario = salarioFormatado + aumento

    console.log(`Seu novo salário é ${novoSalario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
  }
}


