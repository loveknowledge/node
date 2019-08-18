const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') return pwd();
  if (cmd === 'ls') return ls();
  if (cmd === 'cat') return cat();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
