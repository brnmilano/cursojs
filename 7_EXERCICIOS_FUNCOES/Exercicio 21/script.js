function tipoDado(dado) {
  if (typeof dado === "string") {
    console.log(`Esse dado é uma STRING`);
  } else if (typeof dado === "number") {
    console.log(`Esse dado é uma NUMBER`);
  } else {
    console.log(`Esse dado é uma BOOLEAN`);
  }
}

tipoDado(true)
tipoDado("string")
tipoDado(10)