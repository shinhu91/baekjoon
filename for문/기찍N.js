"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString().split("\n");

let result = "";
for (let i = input[0]; i >= 1; i--) {
    result += i + "\n";
}
console.log(result);
