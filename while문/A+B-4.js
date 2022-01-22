"use strict";
const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let index = 0;
let result = "";
while (index < input.length - 1) {
    const [a, b] = input[index].split(" ");
    result += Number(a) + Number(b) + "\n";
    index++;
}
console.log(result);
