let auto1 = {Merk:"Mercedes", motor:"Benzine", Model:"A-Klasse"};
let auto2 = {Merk:"Audi", motor:"Benzine", Model:"A3"};
let auto3 = {Merk:"BMW", motor:"Diesel", Model:"Serie 1"};
let autos = [auto1, auto2, auto3];

console.log(autos.lenght);

for (let i = 0; i < autos.length; i++) {
    objectPrinten(autos[i]);
}

function objectPrinten(parameter) {
    console.log(parameter.Merk + ' ' + parameter.motor + ' ' + parameter.Model);

    
}

