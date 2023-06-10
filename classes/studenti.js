import Utenti from "./utente.js";
//classe utenti -> studenti
class Studenti extends Utenti {
    #anno;
    #tipoCorso;
    #indirizzo;
    #esamiDati;
    #esamiRimanenti;
    #punteggio;
    #cfu;
    constructor(nome, cognome,eta, anno, tipoCorso, indirizzo, esamiDati, esamiRimanenti, punteggio, cfu){
        super(nome, cognome, eta)
        this.#anno = anno;
        this.#tipoCorso = tipoCorso;
        this.#indirizzo = indirizzo;
        this.#esamiDati = esamiDati;
        this.#esamiRimanenti = esamiRimanenti;
        this.#punteggio = punteggio;
        this.#cfu = cfu;
    }
    get anno () {
        return this.#anno;
    };
    get tipoCorso () {
        return this.#tipoCorso;
    };
    get indirizzo () {
        return this.#indirizzo;
    };
    get esamiDati () {
        return this.#esamiDati;
    };
    get esamiRimanenti () {
        return this.#esamiRimanenti;
    };
    get punteggio () {
        return this.#punteggio;
    };
    get cfu () {
        return this.#cfu;
    };
};
export default Studenti;