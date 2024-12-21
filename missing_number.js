const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = []; 

rl.on("line", function (line) {
  inputs.push(line); 

  if (inputs.length === 2) { 
    rl.close(); 
    const n=Number(inputs[0]);
const arr=inputs[1].split(" ").map(Number);
    missing_number(arr, n);
  }
 
});



function missing_number(arr, n){
  
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  let total=(n*(n+1))/2;
  console.log(total-sum);
}
