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
    inscreasing_number(arr, n);
  }
 
});

function inscreasing_number(arr, n){
    let count =0;
    for(let i=0; i<n-1;i++){
        if(arr[i]>arr[i+1]){
            count += arr[i]-arr[i+1];
            arr[i+1]=arr[i];
        }
    }
    console.log(count);
}