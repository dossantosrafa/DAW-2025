const inicio = () => {
    console.log('Inicio...');
}

const fim = () => {
    console.log('Fim');
}

const processa = (ini, final) => {
    ini();
    final();
}

processa(inicio, fim);

processa(() => {
console.log('Inicio2');
},() => {
    console.log('Fim2');
});
