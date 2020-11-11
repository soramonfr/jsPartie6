let firstNumber = Math.round( Math.random() * 9 + 1 );
let secondNumber = Math.round( Math.random() * 9 + 1 );
console.log( firstNumber + " " + secondNumber );

while ( firstNumber * secondNumber < 250 ) {
    console.log( firstNumber * secondNumber );
    secondNumber *= firstNumber;
}