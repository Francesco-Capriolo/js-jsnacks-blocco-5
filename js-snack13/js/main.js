/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */


//Codice giocatore, Nome, Cognome, Età, Media punti fatti per partita, Percentuale di successo per tiri da 3 punti
const player = {
    "codice-giocatore": "",
    nome: "",
    cognome: "",
    età: "",
    mpp: "",
    pct3: "",
};

//Generare casualmente le statistiche di gioco
//il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
function makeId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function makeNumberId(length) {
    let result = '';
    let characters = '123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeId(5));

//sommo le due funzioni ad una funzione
function codeGeneratePlayer() {
    return makeId(3) + makeNumberId(3);
}

//assegno all'elemento dell'oggetto
player["codice-giocatore"] = codeGeneratePlayer();

//la media punti fatti per partita deve essere compresa tra 0 e 50
player.mpp = Math.floor(Math.random() * ((50 - 1) - 0) + 0);


//la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
player.pct3 = Math.floor(Math.random() * ((100 - 1) - 0) + 0);

console.table(player);