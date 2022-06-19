const net = require("net");
const { IP, PORT, NAME } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    port: PORT,
    host: IP,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to a game server"); //Message for connection to server
    conn.write(`Name: ${NAME}`);
  });

  
  conn.on('data', () => {
    console.log('you ded cuz you idled'); //Message for connection lost
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};