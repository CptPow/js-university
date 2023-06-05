import {
  direttore,
  studenti,
  vice,
  insegnanti,
  addetti,
} from "../database/database.js";

const pagina = document.querySelector("body");//prendo body
//tabella direttore
function tabellaDirettore (array){
let table = `<h2>Direttore</h2><table>`
table += `<th>Nome</th><th>Cognome</th><th>Eta</th><th>Gestione</th>`
array.forEach(element => {
    table += `<tr><td>${element.nome}</td><td>${element.cognome}</td><td>${element.eta}</td><td>${element.gestione}</td></tr>`
});
table += `</table>`
return table
};
const tabDirettore = tabellaDirettore(direttore);
pagina.innerHTML = tabDirettore;

//tabella vice
function tabellaVice (array){
    let table = `<h2>Vice</h2><table>`
    table += `<th>Nome</th><th>Cognome</th><th>Eta</th><th>Consulenza</th>`
    array.forEach(element => {
        table += `<tr><td>${element.nome}</td><td>${element.cognome}</td><td>${element.eta}</td><td>${element.consulenza}</td></tr>`
    });
    table += `</table>`
    return table
    };
    const tabVice = tabellaVice(vice);
    pagina.innerHTML += tabVice;

    //tabella insegnanti
    function tabellaInsegnanti (array){
        let table = `<h2>Insegnanti</h2><table>`
        table += `<th>Nome</th><th>Cognome</th><th>Eta</th><th>Materia insegnata</th>`
        array.forEach(element => {
            table += `<tr><td>${element.nome}</td><td>${element.cognome}</td><td>${element.eta}</td><td>${element.materiaInsegnata}</td></tr>`
        });
        table += `</table>`
        return table
        };
        const tabInsegnanti = tabellaInsegnanti(insegnanti);
        pagina.innerHTML += tabInsegnanti;

    //tabella addetti
    function tabellaAddetti (array){
        let table = `<h2>Addetti</h2><table>`
        table += `<th>Nome</th><th>Cognome</th><th>Eta</th><th>Mansione</th>`
        array.forEach(element => {
            table += `<tr><td>${element.nome}</td><td>${element.cognome}</td><td>${element.eta}</td><td>${element.mansione}</td></tr>`
        });
        table += `</table>`
        return table
        };
        const tabAddetti = tabellaAddetti(addetti);
        pagina.innerHTML += tabAddetti;

//tabella studenti
function tabellaStudenti (array){
    let table = `<h2>Studenti</h2><table>`
    table += `<th>Nome</th><th>Cognome</th><th>eta</th><th>anno</th> <th>tipoCorso</th><th>indirizzo</th><th>Esami Dati</th><th>Esami Rimanenti</th><th>punteggio</th><th>CFU</th>`
    array.forEach(element => {
        table += `<tr><td>${element.nome}</td><td>${element.cognome}</td><td>${element.eta}</td><td>${element.anno}</td><td>${element.tipoCorso}</td><td>${element.indirizzo}</td><td>${element.esamiDati}</td><td>${element.esamiRimanenti}</td><td>${element.punteggio}</td><td>${element.cfu}</td></tr>`
    });
    table += `</table>`
    return table
    };
    const tabStudenti = tabellaStudenti(studenti);
    pagina.innerHTML += tabStudenti;

