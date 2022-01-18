"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString().split("\n");
console.log("input", input);

for (let i = 1; i < 1 + Number(input[0]); i++) {
    const [a, b] = input[i].split(" ");
    console.log(Number(a) + Number(b));
}
