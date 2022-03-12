/**
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.
 */


const animals = [{
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'papera',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
    {
        nome: 'oca',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
];

console.table(animals);

//Crea un nuovo array con la lista dei mammiferi.
const classMammiferi = animals.filter((element) => {
    if (element.classe == "mammiferi") return true;
})

console.table(classMammiferi);