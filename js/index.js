let intentos = 5;
let palabraSecretaCategoria;
let palabraSecretaAleatoria;
let lista = [];
let palabraEncontrada = [];

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

function verificarLetra(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (intentos > 0) {
        compararLetra(letra);
        colorLetraSeleccionada("tecla-" + letra);
    }
}

function colorLetraSeleccionada(tecla) {
    document.getElementById(tecla).style.background = "#ced4da";
    document.getElementById(tecla).style.color = "#052051";
    document.getElementById(tecla).setAttribute("onclick", ";");
}

function compararLetra(letra) {
    let letraEncontrada = false;
    let palabraFinal;

    for (i = 0; i < palabraSecretaAleatoria.length; i++) {
        if (letra == palabraSecretaAleatoria.charAt(i)) {
            lista[i] = letra;
            letraEncontrada = true;
            palabraEncontrada[i] = palabraSecretaAleatoria.charAt(i);
            palabraFinal = palabraEncontrada.join("");
            console.log(palabraEncontrada);
            console.log(palabraFinal);
        }
    }
    if (letraEncontrada == true) {
        mostrarpalabra();
    } else {
        intentos--;
        if (intentos <= 0) {
            mostrarModal("La palabra era: " + palabraSecretaAleatoria);
        }
        console.log(intentos);
        mostrarImagen();
    }
    if (palabraFinal == palabraSecretaAleatoria) {
        mostrarModal("Felicidades, ¡has ganado!");
    }
}

function mostrarImagen() {
    switch (intentos) {
        case 4:
            document.getElementById("imagen").src = "./img/1.png";
            break;
        case 3:
            document.getElementById("imagen").src = "./img/2.png";
            break;
        case 2:
            document.getElementById("imagen").src = "./img/3.png";
            break;
        case 1:
            document.getElementById("imagen").src = "./img/4.png";
            break;
        case 0:
            document.getElementById("imagen").src = "./img/5.png";
            break;
        default:
            document.getElementById("imagen").src = "./img/0.png";
            break;
    }
}

function mostrarModal(mensaje) {
    let modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = mensaje;

    let repetir = document.getElementById("repetir");
    repetir.onclick = function () {
        location.reload();
    };

    $('#myModal').modal({
        show: true
    });
}

function cambiarPalabra() {
    let cambio = document.getElementById("cambiar-palabra");
    cambio.onclick = function () {
        location.reload();
    }
}

crearPalabraSecreta();
mostrarpalabra();