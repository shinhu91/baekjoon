"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString().split("\n");

let result = 0;
for (let i = 1; i <= input[0]; i++) {
    result += Number(i);
}

console.log(result);
