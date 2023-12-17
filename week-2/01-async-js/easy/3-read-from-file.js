const fs = require('node:fs');

fs.readFile('./1-counter.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// for (let i = 0; i < 1000000000; i ++) {
// }
console.log('hi');