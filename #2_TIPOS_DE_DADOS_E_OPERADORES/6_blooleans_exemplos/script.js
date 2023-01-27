console.log(5 > 3 && 3 === 2);

console.log(3 == 3 && "Bruno" == "Bruno");
console.log("Felipe" == "João" || false);
console.log(!(true && true));
console.log(!!(true && true));

console.log(true && true); //só retorna true se os dois lados forem true
console.log(false || false); //o OU só retorna false se os dois lados forem false

// operador ternário

console.log(5 > 2 ? "É maior" : "Não é maior"); // Retorna um boolean
console.log(false ? 5 : 4);
console.log("Bruno" == "Bruno" ? "Oi Bruno" : "Não é o Bruno"); // Aqui é uma condicional