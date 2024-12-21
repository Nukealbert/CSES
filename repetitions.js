
//You are given a DNA sequence: a string consisting of characters A, C, G, and T. Your task is to find the longest repetition in the sequence. This is a maximum-length substring containing only one type of character.
var readline = require("readline")

var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

r.on("line", function (line) {
  repetitions(line);
  r.close();
})
function  repetitions(text){
    let count=1;
    let max=0;
    if(text.length===1){
        console.log(count);
        return;
    }
    for(let i=0;i<text.length-1;i++){
        if(text[i]===text[i+1]){
        count++;
        }
        else{
        count=1;
        }
        if(count>max){
        max=count;
        }
    }
    console.log(max);
}