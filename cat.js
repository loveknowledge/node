const fs = require('fs');

module.exports = function () {
  let fileName = data.toString().trim().split(' ');
  fs.readFile(fileName[1], (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
