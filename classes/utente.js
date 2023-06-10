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

export default Utenti;