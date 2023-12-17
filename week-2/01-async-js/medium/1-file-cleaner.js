const fs = require('node:fs');

fs.readFile(
  './input.txt',
  'utf8',
  (err, data) => {
    if (err) {
      console.error(err);
    }
    fs.writeFile(
      './output.txt',
      data.replace(/\s+/g, " ").trim(),
      err => {
        console.error(err);
      }
    );
  }
)