const { watch, series } = require('gulp');
const { spawn } = require('child_process');

function startServerGetProcess(){
  console.log('start new process');
  return spawn('node',['./index.js']);
}

exports.default = () => {
  let serverProcess = startServerGetProcess();
  watch('./**/*.js', (path) => {
    return new Promise((rsv, rej) => {
      console.log('kill old');
      serverProcess.kill();
      serverProcess = startServerGetProcess();
    })
  })
}
