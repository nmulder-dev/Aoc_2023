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

    // Iterate through each line
    lines.map((line, index) => {
      let first, last;

      line = line
        .replaceAll("zero", "0")
        .replaceAll("one", "1")
        .replaceAll("two", "2")
        .replaceAll("three", "3")
        .replaceAll("four", "4")
        .replaceAll("five", "5")
        .replaceAll("six", "6")
        .replaceAll("seven", "7")
        .replaceAll("eight", "8")
        .replaceAll("nine", "9");

      // Iterate through each character
      for (let i = 0; i < line.length; i++) {
        // Check if character is a number
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
