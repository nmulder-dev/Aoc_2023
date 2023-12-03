const fs = require("node:fs");
let sum = 0;

fs.readFile(
  "C:/Users/Nick/source/repos/Aoc_2023/Day 1/input.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // convert to array by newline
    const lines = data.split("\n");
    lines.map((line, index) => {
      let first, last;
      for (let i = 0; i < line.length; i++) {
        if (!isNaN(line[i]) && !first) {
          first = line[i];
        } else if (!isNaN(line[i])) {
          last = line[i];
        }
      }
      if (!last) {
        last = first;
      }
      console.log(`${index}: ${line}\t${first} ${last}`);
      if (line) {
        sum = sum + parseInt(`${first}${last}`);
      }
    });
    console.log(sum);
  }
);
