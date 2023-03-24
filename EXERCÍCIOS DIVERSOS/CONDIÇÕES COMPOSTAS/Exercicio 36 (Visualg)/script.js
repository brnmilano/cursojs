function myFunction() {
  const horasAtividade = prompt("Quantas horas de atividade uma você teve no mês? ");

  if (horasAtividade < 10) {
    pontos = horasAtividade * 2

    fatura = pontos * 0.05

    console.log(`Você teve ${horasAtividade} horas de atividade, ${pontos} pontos e faturou ${fatura.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} reais.`);
  } else if (horasAtividade > 10 && horasAtividade < 20) {
    pontos = horasAtividade * 5

    fatura = pontos * 0.05

    console.log(`Você teve ${horasAtividade} horas de atividade, ${pontos} pontos e faturou ${fatura.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} reais.`);
  } else {
    pontos = horasAtividade * 10

    fatura = pontos * 0.05

    console.log(`Você teve ${horasAtividade} horas de atividade, ${pontos} pontos e faturou ${fatura.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} reais.`);
  }
}
