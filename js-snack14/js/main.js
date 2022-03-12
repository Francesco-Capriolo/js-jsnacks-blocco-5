/**
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.
 *
 */

//Crea un array composto da 12 automobili.
const cars = [{
        marca: "bmw",
        modello: "x6",
        alimentazione: "benzina",
    },
    {
        marca: "mercedes",
        modello: "classeA",
        alimentazione: "elettrico",
    },
    {
        marca: "audi",
        modello: "",
        alimentazione: "diesel",
    },
    {
        marca: "fiat",
        modello: "bravo",
        alimentazione: "gpl",
    },
    {
        marca: "pegeout",
        modello: "2008",
        alimentazione: "diesel",
    },
    {
        marca: "citroen",
        modello: "ds-6",
        alimentazione: "benzina",
    },
    {
        marca: "bmw",
        modello: "x5",
        alimentazione: "diesel",
    },
    {
        marca: "bmw",
        modello: "x6",
        alimentazione: "benzina",
    }, {
        marca: "mercedes",
        modello: "classeA",
        alimentazione: "elettrico",
    }, {
        marca: "audi",
        modello: "",
        alimentazione: "diesel",
    }, {
        marca: "fiat",
        modello: "bravo",
        alimentazione: "gpl",
    }, {
        marca: "pegeout",
        modello: "2008",
        alimentazione: "diesel",
    },

];


console.table(cars);

//usare la funzione filter per poter far ritornare un elemento desiderato
const benzinCars = cars.filter((element) => {
    if (element.alimentazione == "benzina") {
        return true;
    }
});

console.table(benzinCars);

const dieselCars = cars.filter((element) => {
    if (element.alimentazione == "diesel") {
        return true;
    }

});

console.table(dieselCars);

const gplCars = cars.filter((element) => {
    if (element.alimentazione == "gpl") {
        return true;
    }

});

console.table(gplCars);