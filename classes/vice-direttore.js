import Utenti from "./utente.js";

//classe utenti -> vice-direttore
class Vice extends Utenti{
    #consulenza;
    constructor(nome, cognome, eta, consulenza){
        super(nome, cognome, eta)
        this.#consulenza = consulenza;
    }
    get consulenza () {
        return this.#consulenza;
    }
};
export default Vice;