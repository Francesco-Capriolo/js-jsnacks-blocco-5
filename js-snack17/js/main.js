/**
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona,
    una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

//Ogni persona ha un nome, un cognome e un'età.
const people = [{
        nome: 'Giuseppe',
        cognome: 'Capriolo',
        eta: 33
    },
    {
        nome: 'Pierino',
        cognome: 'Caprioli',
        eta: 15
    },
    {
        nome: 'Giovanna',
        cognome: 'feina',
        eta: 20
    },
    {
        nome: 'Sabrina',
        cognome: 'galax',
        eta: 18
    },
];

//Crea un nuovo array inserendo, per ogni persona,
//una frase con il nome e cognome e l 'indicazione se può guidare, in base all'età.
const newArray = people.map((person) => {
    if (person.eta >= 18) person.phrase = `${person.nome} ${person.cognome} può guidare`;
    else person.phrase = `${person.nome} ${person.cognome} non può guidare`;

    return person;
});

console.table(newArray);