const operacionesBancarias = require("./montos");

// Agarro lo que ingresa el cliente

const accion = process.argv[2];
let numero = process.argv[3];

// Si es una extracción le agrego el "-"

if (accion === "extrae") {
    numero = "-" + numero
}

// Defino acciones por cada operación ingresada

if (accion === "total") {
    operacionesBancarias.total()
} else if ((accion === "deposita") || (accion === "extrae")) {
    operacionesBancarias.guardarMovimiento()
} else {
    console.log("Su operación es incorrecta")
}

