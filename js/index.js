let intentos = 5;
let palabraSecretaCategoria;
let palabraSecretaAleatoria;
let lista = [];
let palabraEncontrada = [];
let palabras = [];

/* lista de palabras */

if (localStorage.getItem("palabras") != null) {
    palabras = JSON.parse(localStorage.getItem("palabras"));
} else {
    palabras = [
        {
            nombre: "COLOMBIA",
            categoria: "País",
        },
        {
            nombre: "MEXICO",
            categoria: "País",
        },
        {
            nombre: "PERU",
            categoria: "País",
        },
        {
            nombre: "TREN",
            categoria: "Transporte",
        },
        {
            nombre: "AVION",
            categoria: "Transporte",
        },
        {
            nombre: "CARRO",
            categoria: "Transporte",
        },
        {
            nombre: "PIZZA",
            categoria: "Comida",
        },
        {
            nombre: "PASTA",
            categoria: "Comida",
        },
        {
            nombre: "HELADO",
            categoria: "Comida",
        },
        {
            nombre: "MANILLA",
            categoria: "Objeto",
        },
        {
            nombre: "LAPIZ",
            categoria: "Objeto",
        },
        {
            nombre: "CELULAR",
            categoria: "Objeto",
        },
        {
            nombre: "PERRO",
            categoria: "Animal",
        },
        {
            nombre: "GATO",
            categoria: "Animal",
        },
        {
            nombre: "CABALLO",
            categoria: "Animal",
        }
    ]
}

function crearPalabraSecreta() {
    const listaPalabras = parseInt(Math.random() * palabras.length);

    palabraSecretaAleatoria = palabras[listaPalabras].nombre;
    palabraSecretaCategoria = palabras[listaPalabras].categoria;
}

function agregarPalabra() {
    let nombre = document.getElementById("texto-nombre").value;
    let categoria = document.getElementById("texto-categoria").value;
    palabras.push({ nombre: nombre.toUpperCase(), categoria: categoria });
    localStorage.setItem("palabras", JSON.stringify(palabras));
    location.href = "juego.html";
}

function mostrarpalabra() {
    const categoria = document.getElementById("categoria");
    categoria.innerText = palabraSecretaCategoria;

    const palabraSecreta = document.getElementById("palabra-secreta");
    palabraSecreta.innerText = " ";

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
    }
}

function colorLetraSeleccionada(letra, estado) {
    if (estado == true) {
        document.getElementById("tecla-" + letra).style.background = "#00B52E";
        document.getElementById("tecla-" + letra).style.color = "#FFFFFF";
        document.getElementById("tecla-" + letra).setAttribute("onclick", ";");
    } else {
        document.getElementById("tecla-" + letra).style.background = "#B40008";
        document.getElementById("tecla-" + letra).style.color = "#FFFFFF";
        document.getElementById("tecla-" + letra).setAttribute("onclick", ";");
    }
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
        }
    }

    colorLetraSeleccionada(letra, letraEncontrada);

    if (letraEncontrada == true) {
        mostrarpalabra();
    } else {
        intentos--;
        if (intentos <= 0) {
            mostrarModal("La palabra era: " + palabraSecretaAleatoria);
        }
        mostrarImagen();
    }
    if (palabraFinal == palabraSecretaAleatoria) {
        mostrarModal("Ganaste, ¡Felicidades!");
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
    modalBody.innerText = mensaje;

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