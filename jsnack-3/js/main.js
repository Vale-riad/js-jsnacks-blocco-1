const invitati = ["mario" , "giovanni" , "marco" , "francesca"];
const nomeInvitato = prompt("Inserisci il tuo nome");

let found = false;
for( let i = 0; i < invitati.length; i++ ) {
    if( nomeInvitato === invitati[i] ) {
        found = true;
        break;
    }
}

if( found ) {
    alert("Puoi partecipare alla festa!");
} else {
    alert("non puoi partecipare alla festa!");
}

