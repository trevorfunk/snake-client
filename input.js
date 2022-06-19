const net = require("net");
const { MESSAGES, MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT } = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) { //Movement and messages for user snake
    if (key === '\u0003') {
      process.exit();
    }
    if (key === MOVE_UP) {
      conn.write("Move: up");
    }
    if (key === MOVE_LEFT) {
      conn.write("Move: left");
    }
    if (key === MOVE_DOWN) {
      conn.write("Move: down");
    }
    if (key === MOVE_RIGHT) {
      conn.write("Move: right");
    }
    if (MESSAGES[key]) {
      conn.write(MESSAGES[key]);
    }
  };

  stdin.on("data", (handleUserInput));
  return stdin;
};



module.exports = {setupInput};