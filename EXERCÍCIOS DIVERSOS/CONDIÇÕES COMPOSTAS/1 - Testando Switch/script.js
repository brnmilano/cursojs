function enviar() {
  let nome = document.getElementById("valor").value;

  switch (nome) {
    case "João":
      console.log("O seu nome é João");
      break;

    case "Marcos":
      console.log("O seu nome é Marcos");
      break

    case "Bruno":
      console.log("O seu nome é Bruno");
      break

    case "Maria":
      console.log("O seu nome é Maria");
      break

    default:
      console.log("O seu nome não consta na lista");
      break;
  }
}


