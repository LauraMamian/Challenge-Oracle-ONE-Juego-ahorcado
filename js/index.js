let palabraSecretaCategoria;
let palabraSecretaAleatoria;
let lista = [];

/* lista de palabras */

const palabras = [
    p1 = {
        nombre: "COLOMBIA",
        categoria: "País",
    },
    p2 = {
        nombre: "MEXICO",
        categoria: "País",
    },
    p3 = {
        nombre: "PERU",
        categoria: "País",
    },
    p4 = {
        nombre: "TREN",
        categoria: "Transporte",
    },
    p5 = {
        nombre: "AVION",
        categoria: "Transporte",
    },
    p6 = {
        nombre: "CARRO",
        categoria: "Transporte",
    },
    p7 = {
        nombre: "PIZZA",
        categoria: "Comida",
    },
    p8 = {
        nombre: "PASTA",
        categoria: "Comida",
    },
    p9 = {
        nombre: "HELADO",
        categoria: "Comida",
    },
    p10 = {
        nombre: "MANILLA",
        categoria: "Objeto",
    },
    p11 = {
        nombre: "LAPIZ",
        categoria: "Objeto",
    },
    p12 = {
        nombre: "CELULAR",
        categoria: "Objeto",
    },
]

function crearPalabraSecreta() {
    const listaPalabras = parseInt(Math.random() * palabras.length);

    palabraSecretaAleatoria = palabras[listaPalabras].nombre;
    palabraSecretaCategoria = palabras[listaPalabras].categoria;

    console.log(palabraSecretaAleatoria);
    console.log(palabraSecretaCategoria);
}

crearPalabraSecreta();


function mostrarpalabra() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palabraSecretaCategoria;

    const palabraSecreta = document.getElementById("palabra-secreta");
    palabraSecreta.innerHTML = " ";

    for (i = 0; i < palabraSecretaAleatoria.length; i++) {
        if (lista[i] == undefined) {
            lista[i] = "_";
            palabraSecreta.innerHTML = palabraSecreta.innerHTML + "<div class='letras'>" + lista[i] + "</div>";
        } else {
            palabraSecreta.innerHTML = palabraSecreta.innerHTML + "<div class='letras'>" + lista[i] + "</div>";
        }
    }
}

mostrarpalabra();