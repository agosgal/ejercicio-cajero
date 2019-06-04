const fs = require("fs");
const path = require("path");
const filename = path.join(__dirname, "cuenta.txt");

 // En estos casos agrego el monto al txt
 function guardarMovimiento() {
    fs.appendFile(filename, ("," + numero), function(err,data) {
        if (err) {
            console.log("Salió todo mal");
        } else {
            console.log("Todo ok")
        }
    })
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
};


module.exports = {
    total: total,
    guardarMovimiento: guardarMovimiento
}