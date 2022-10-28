

const numeri = [];
for (let index = 0; index < 6; index++) {
    let numbers = Number(prompt("inserisci 6 numeri"));
 if(numbers % 2 == 1){
    numeri.push(numbers);
    console.log(numeri);
}
}