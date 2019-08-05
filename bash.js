const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') return pwd();
  if (cmd === 'ls') return ls();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
