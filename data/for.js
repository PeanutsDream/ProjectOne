var readline = require('readline-sync');
var znak = readline.question("Zadejte Znak: ");
var readline = require('readline-sync');
var pocet = readline.question("Zadejte Pocet: ");

if (pocet > 20) {
    console.log("Počet je větší než 20!")
}
else {
    for (var _i = 0; _i < (pocet); _i++) {
        console.log(znak.repeat(pocet));
    }
}


