const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    port: 50541,// PORT number here,
    host: "localhost", // IP address here,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to a game server");
    conn.write("Name: TRE");
  });

  
  conn.on('data', () => {
    console.log('you ded cuz you idled'); //Message for connection lost
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};