

const numeri = [""];
for (let index = 1; index < 7; index++) {
    let numbers = Number(prompt("inserisci 6 numeri"));
 if(numbers % 2 == 1){
    numeri.push(numbers);
    console.log(numeri);
}
}