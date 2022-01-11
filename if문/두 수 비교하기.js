"use strict";
const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split(" ");

var A = parseInt(input[0].toString());
var B = parseInt(input[1].toString());

if (A > B) {
    console.log(">");
} else if (A < B) {
    console.log("<");
} else {
    console.log("==");
}
