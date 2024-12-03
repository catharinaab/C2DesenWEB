//Minha possível solução
function gerarNumerosMegaSena(quantidade) {
    const numeros = [];
    let tentativas = 0;

    while (numeros.length < quantidade) {
        const aleatorio = Math.floor(Math.random() * 60) + 1;
        tentativas++;
        if (!numeros.includes(aleatorio)) {
            numeros.push(aleatorio);
        }
    }

    console.log(`Números gerados: ${numeros}`);
    console.log(`Total de tentativas: ${tentativas}`);
    return numeros;
}

gerarNumerosMegaSena(6);
