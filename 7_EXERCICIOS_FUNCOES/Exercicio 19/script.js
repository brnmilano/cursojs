function randomNumber(numeroAleatorio) {
  return Math.floor(Math.random() * numeroAleatorio) + 1;
}

console.log(randomNumber(10));
console.log(randomNumber(100));
console.log(randomNumber(1000));