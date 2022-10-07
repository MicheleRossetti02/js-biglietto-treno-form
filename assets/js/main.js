// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

//infomrazioni principali

const fullName = prompt("Indica il tuo nome completo");
console.log(fullName);
const kmScelti = prompt ("Quanti kilometri vuole percorrere?");
console.log(kmScelti);
const age = prompt ("Quanti anni hai?");
console.log(age);


const euro ="€";
const price = 0.21;
const totalPrice = (kmScelti * price);
console.log(totalPrice);

if(age<=18){
    const sconto = totalPrice * 20 / 100 ;
    const prezzoFinale = totalPrice - sconto;

} else if (age>=65){
    const sconto = totalPrice * 40 / 100 ;
    const prezzoFinale = totalPrice - sconto;

}

const buttonGenerator = document.getElementById("genera");

buttonGenerator.addEventListener ("click", function() {
        // Codice da eseguire qui
        console.log('hai cliccato sulla colonna');
      
})