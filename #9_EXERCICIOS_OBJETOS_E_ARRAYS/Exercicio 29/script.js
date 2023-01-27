const onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2,
};

console.log(onibus);

onibus.janelas = 20

console.log(`O ônibus tem ${onibus.janelas} janelas`);

delete onibus.rodas

console.log(onibus);

