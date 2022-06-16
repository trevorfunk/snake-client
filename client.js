const net = require("net");

const connect = function () {
 const conn = net.createConnection({
  port: 50541,// PORT number here,
  host: "localhost", // IP address here,
 });
 
 conn.on('data', (data) => {
  console.log('you ded cuz you idled')
})

 // interpret incoming data as text
 conn.setEncoding("utf8");

 return conn;
};

module.exports = {connect};