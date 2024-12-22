var readline = require("readline")

var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

r.on("line", function (line) {
  var vals = line.split(" ")
  var input = Number(vals[0])
    permutation(input);
    r.close();
})


function permutation(n){
    let arr1 =[];
    let arr2 =[];
    if(n===2 || n===3){
        console.log("NO SOLUTION");
        return;
    }
    if(n===1){
        console.log(1);
        return;
    }
    for(let i=0; i<n;i++){
        if((i+1)%2===0){
            arr2.push(i+1);
        }
        else{
            arr1.push(i+1);
        }
    }
    let arr = arr2.concat(arr1);
    console.log(arr.join(" "));
}