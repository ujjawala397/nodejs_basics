var mod_child_process = require('child_process');
var mod_events = require('events');
for (var i=0; i<3; ++i)
{
var childProcess;
childProcess = mod_child_process.spawn('cmd.exe');
displayid(childProcess);
}
function displayid(childProcess){
childProcess.stdout.on('data', function(data) {
console.log('stdout (' + childProcess.pid + '): ' + data);
});
}
