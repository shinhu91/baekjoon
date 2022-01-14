"use strict";
const fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString().split(" ");

let hour = input[0];
let min = input[1];

if (Number(min) - 45 < 0) {
    hour -= 1;
    if (hour < 0) {
        hour = 24 - Math.abs(hour);
    }
    min = 60 - Math.abs(min - 45);
} else {
    min -= 45;
}

console.log(hour, min);
