let palabraSecretaCategoria;
let palabraSecretaAleatoria;

/* lista de palabras */

const palabras = [
    p1 = {
        palabra: "COLOMBIA",
        categoria: "País",
    },
    p2 = {
        palabra: "MEXICO",
        categoria: "País",
    },
    p3 = {
        palabra: "PERU",
        categoria: "País",
    },
    p4 = {
        palabra: "TREN",
        categoria: "Transporte",
    },
    p5 = {
        palabra: "AVION",
        categoria: "Transporte",
    },
    p6 = {
        palabra: "CARRO",
        categoria: "Transporte",
    },
    p7 = {
        palabra: "PIZZA",
        categoria: "Comida",
    },
    p8 = {
        palabra: "PASTA",
        categoria: "Comida",
    },
    p9 = {
        palabra: "HELADO",
        categoria: "Comida",
    },
    p10 = {
        palabra: "MANILLA",
        categoria: "Objeto",
    },
    p11 = {
        palabra: "LAPIZ",
        categoria: "Objeto",
    },
    p12 = {
        palabra: "CELULAR",
        categoria: "Objeto",
    },
]

function crearPalabraSecreta() {
    const listaPalabras = parseInt(Math.random() * palabras.length);

    palabraSecretaAleatoria = palabras[listaPalabras].palabra;
    palabraSecretaCategoria = palabras[listaPalabras].categoria;

    console.log(palabraSecretaAleatoria);
    console.log(palabraSecretaCategoria);
}

crearPalabraSecreta();
