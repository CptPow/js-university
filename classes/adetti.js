import Utenti from "./utente.js";
//utenti -> addetti
class Addetti extends Utenti{
    #mansione
    constructor(nome, cognome, eta, mansione){
        super(nome, cognome, eta)
        this.#mansione = mansione;
    }
    get mansione (){
        return this.#mansione;
    }
    };

    export default Addetti;