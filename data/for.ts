var readline = require('readline-sync');
var znak:string = readline.question("Zadejte Znak: ");
var readline = require('readline-sync');
var pocet:number = readline.question("Zadejte Pocet: ");

for (var _i = 0; _i < (pocet); _i++) {
    console.log(znak.repeat(pocet))
}


