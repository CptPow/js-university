import Utenti from "./utente.js";
//class utenti -> insegnanti
class Insegnanti extends Utenti {
    #materiaInsegnata;
    constructor(nome, cognome, eta, materiaInsegnata){
        super(nome, cognome, eta)
        this.#materiaInsegnata = materiaInsegnata;
    }
    get materiaInsegnata () {
        return this.#materiaInsegnata;
    }
};
export default Insegnanti;