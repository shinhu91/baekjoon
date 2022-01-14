"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString();

for (let i = 1; i < 10; i++) {
    console.log(input[0], "*", i, "=", i * input[0]);
}
