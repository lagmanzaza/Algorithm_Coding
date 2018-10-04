let sum = 0;
let count = prompt("count : ");
// loop input
for (let i=1;i<=parseInt(count);i++) {
    // count number
    let num = prompt("num : ");
    for (let i=1;i<=parseInt(num);i++) {
        sum += parseFloat(num);
        break;
    }
}
// count number
console.log("Summation is " + parseFloat(sum).toFixed(2));

// count Average
console.log("Average is " + parseFloat(sum/count).toFixed(3));