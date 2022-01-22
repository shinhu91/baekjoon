"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = fs.readFileSync("example.txt").toString().split("\n");

let num = input[0];

if (num < 10) {
    num = "0" + num;
}

let n = num;
let answer = 0;
while (true) {
    answer++;
    const [a, b] = n.split("");
    const adder = (Number(a) + Number(b)).toString().split("");

    const result = b.toString() + adder[adder.length - 1];
    if (Number(result) == Number(num)) {
        break;
    } else {
        n = result;
    }
}
console.log(answer);
