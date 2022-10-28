const numbers = [3, 4, 7, 2];
console.log(numbers);

let i = 0;
let sum = 0;

while(i < numbers.length){
    if(i % 2 == 1){
        sum = sum + numbers[i];
    }
    i++
}
console.log(`${sum}`);