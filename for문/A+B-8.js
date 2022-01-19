"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString().split("\n");

const len = Number(input[0]);

for (let i = 1; i < len; i++) {
  const [num1, num2] = input[i].split(" ");
  console.log(`Case #${i}: ${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
}
