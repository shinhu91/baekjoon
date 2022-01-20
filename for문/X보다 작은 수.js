"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = fs.readFileSync("example.txt").toString().split("\n");

const [N, X] = input[0].split(" ");
const arr = input[1].split(" ");

const result = arr
    .filter((e, i) => {
        return Number(e) < Number(X);
    })
    .join(" ");

console.log(result);
