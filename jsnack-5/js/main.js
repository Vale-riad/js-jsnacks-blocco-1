const numbers = ["3", "4", "7", " 2"];
console.log(numbers);

i = 0;
let sum = 0;

while(i < numbers.length){
    if(i % 2 == 0){
        sum = sum + i;
    }
    i++
}
console.log(`${sum}`);