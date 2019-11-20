const spawn = require('child_process').spawn;
const bat = spawn('cmd.exe', ['/c','calc.exe']);
bat.stdout.on('data', (data) => {
console.log(data);
});
bat.stderr.on('data', (data) => {
console.log(data);
});
bat.on('closed', (code) => {
alert(`Child exited with code ${code}`);
});