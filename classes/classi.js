class Utenti {
    #nome;
    #cognome;
    #eta;
    constructor(nome, cognome, eta){
        this.#nome = nome;
        this.#cognome = cognome;
        this.#eta = eta;
    }
    get nome () {
        return this.#nome;
    };
    get cognome () {
        return this.#cognome;
    };
    get eta () {
        return this.#eta;
    };
};
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

export {Direttore, Studenti, Vice, Insegnanti, Addetti}


