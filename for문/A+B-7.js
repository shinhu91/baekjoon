"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString().split("\n");

const len = Number(input[0]);

let result = "";
for (let i = 1; i < len; i++) {
  const [a, b] = input[i].split(" ");
  result += `Case #${i}: ${Number(a) + Number(b)}\n`;
}
console.log(result);
