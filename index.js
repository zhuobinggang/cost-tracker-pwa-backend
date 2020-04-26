const express = require('express')
const app = express()
const port = 9090


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api', (req, res) => {
  res.send('updated')
})

console.log('I am here123')

let server = null;

function start(){
  server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}

function close(){
  if(server != null && 'close' in server){
    server.close()
  }else{
    console.log('Cannot stop null')
  }
}

start();

// setTimeout(() => {
//   console.log('End!')
//   close()
// }, 5000)

// exports.default = {
//   start, close
// }

