const EventEmitter = require('events');

module.exports = function({port=8081}){

  // Browser Code
  const host = window.document.location.host.replace(/:.*/, '');
  const ws = new WebSocket('ws://' + host + ':'+port);

  // Node Require
  class Bogo extends EventEmitter {}
  const bogo = new Bogo();

  // Bogo Core
  ws.onmessage = function (raw) {
    const {name, data} = JSON.parse(raw.data);
    bogo.emit(name, data);
  };

  bogo.on('reply', (event) => {
    ws.send(JSON.stringify(event));
  });

  return bogo;
}
