let sum = 0;
let multiple = 1;
for (let i = 1;i<=2;i++) {
    let num = parseInt(prompt(""));
    for (let i = 1;i<=num;i++) {
        sum += parseFloat(num);
        multiple *= parseFloat(num);
        break;
    }
}
console.log("The sum of the given numbers : " + parseFloat(sum));
console.log("The difference of the given numbers : " + parseFloat(sum)/2);
console.log("The product of the given numbers : " + parseFloat(multiple));
