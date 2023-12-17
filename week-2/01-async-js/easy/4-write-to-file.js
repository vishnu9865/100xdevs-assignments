const fs = require("fs");

fs.writeFile('./example.txt', "Hi, How are you" , err => {
  if (err) {
    console.error(err);
  }
});