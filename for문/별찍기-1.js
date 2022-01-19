"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString().split("\n");

const len = Number(input[0]);

for (let i = 1; i <= len; i++) {
  let result = "";
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  console.log(result);
}
