import Utenti from "./utente.js";
//classe utenti -> direttore
class Direttore extends Utenti{
    #gestione;
    constructor(nome, cognome, eta, gestione){
        super(nome, cognome, eta)
        this.#gestione = gestione;
    }
    get gestione () {
        return this.#gestione;
    }
};

export default Direttore;