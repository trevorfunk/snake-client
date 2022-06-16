const net = require("net");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) { //add key to terminate game
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
    if (key == 'j') {
     conn.write("Say: I'm a slippery snake")
    }
    if (key == 'k') {
     conn.write("Say: somebody stop me!")
    }
    if (key == 'l') {
     conn.write("Say: GET OUT OF MY WAY")
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = {setupInput};