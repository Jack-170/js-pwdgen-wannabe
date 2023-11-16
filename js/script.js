//richiedo delle informazioni all'utente per fornirgli una password personale

// chiedo il nome all'utente
const userName = prompt("Come ti chiami?");


// chiedo il cognome all'utente

const userSurname = prompt("Indica il tuo Cognome");


// chiedo il proprio colore preferito all'utente

const favouriteColor = prompt("qual'è il tuo colore preferito?")


// "Genero" la password

let password = userName + userSurname + favouriteColor + 23;
console.log (password);


// metto insieme le 3 risposte e fornisco una password  consigliata

document.getElementById("my-id").innerHTML ="Ecco la tua password generata in base alle tue risposte: " + password;



