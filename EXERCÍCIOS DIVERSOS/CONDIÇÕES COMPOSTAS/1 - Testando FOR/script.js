function enviar() {
  let contador = document.getElementById("contador").value;



  if (contador > 0) {
    for (let genero = 1; genero <= contador; genero++) {
      console.log(genero);
    }
  } else {
    console.log("");
    for (let genero = -1; genero >= contador; genero--) {
      console.log(genero);
    }
  }
}


