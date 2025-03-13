function transporMatriz(A) {
    console.log("Matriz original:");
    A.forEach(linha => console.log(linha.join(" ")));

    const transposta = A[0].map((_, i) => A.map(linha => linha[i]));

    console.log("\nMatriz transposta:");
    transposta.forEach(linha => console.log(linha.join(" ")));
}

const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizExemplo);
