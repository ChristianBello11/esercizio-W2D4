// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/


const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [54, 25, 122]
const shippingCost = 25
let utenteCheEffettuaLAcquisto = amy 

console.log(utenteCheEffettuaLAcquisto);

let clienti = [marco, paul, amy]

let acquisti = [
  {client: marco, prezzo: prices[0]},
  
  {client: paul, prezzo: prices[1]},
  
  {client: amy, prezzo: prices[2]}
]



cliente: for(let i1 = 0;i1 < clienti.length; i1++){
  if(clienti[i1].isAmbassador === true){
    console.log(clienti[i1].name + " " + clienti[i1].lastName + " è ambassador.");
    let prezzoScontatoship = (acquisti[i1].prezzo *0.70) + shippingCost
    let prezzoScontato = (acquisti[i1].prezzo *0.70)
    
    if(acquisti[i1].prezzo <=100){
      console.log("Prezzo: " + prezzoScontatoship.toFixed(0)); 
    } else {
      console.log("Prezzo: " + prezzoScontato.toFixed(0) + " + spedizione gratuita.");
    }
  } else {
    console.log(clienti[i1].name + " " + clienti[i1].lastName + " non è ambassador.");
    if(acquisti[i1].prezzo <=100){
      console.log("Prezzo: " + (acquisti[i1].prezzo).toFixed(0)); 
    } else {
      console.log("Prezzo: " + (acquisti[i1].prezzo).toFixed(0) + " + spedizione gratuita.");
    }
  
  }
}






