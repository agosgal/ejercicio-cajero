const fs = require("fs");
const path = require("path");
const filename = path.join(__dirname, "/cuenta.txt");

// Agarro lo que ingresa el cliente

const accion = process.argv[2];
let numero = process.argv[3]

// Si es una extracción le agrego el "-"

if (accion === "extrae") {
    numero = "-" + numero
}


// Defino acciones por cada operación ingresada

if (accion === "total") {
    total()
} else if ((accion === "deposita") || (accion === "extrae")) {

    // En estos casos agrego el monto al txt
    fs.appendFile(filename, ("," + numero), function(err,data) {
        if (err) {
            console.log("Salió todo mal");
        } else {
            console.log("Todo ok")
        }
    })
    
} else {
    console.log("Su operación es incorrecta")
}

// Función para traer el total

function total() {
    fs.readFile(filename, function (err, data) {
        const montos = data.toString().split(",");
        console.log(montos);
        let saldo = 0;
        for (let i = 0; i < montos.length; i++) {
            const valor = parseInt(montos[i]);
            saldo = saldo + valor;
        }
        console.log("Tu saldo es: " + saldo)
    });
}
