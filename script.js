alert('Questo è un generatore di password! Inserisci i dati richiesti per la generazione.')

console.log('esercizio generatore di password');

//1.
const firstname = prompt('Inserisci il nome');
console.log(firstname);

//2.
const lastname = prompt('Inserisci il cognome');
console.log(lastname);

//3.
const color = prompt('Qual è il tuo colore preferito?')
console.log(color);

//4.
document.getElementById('psw').innerHTML = 
`
<h1>Password generata con successo!</h1>

<p>
   Questa sarà la tua password: <strong>${firstname}${lastname}${color}24</strong>

</p>
`;



