function tamanhoTexto(texto) {
  if (texto.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }

  console.log(texto.length);
}

tamanhoTexto("Testar se o texto é muito grande")
tamanhoTexto("Texto < 10")