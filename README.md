# bogo
Event Emitter wrapper for Web Sockets (for use in browsers)

## Install

      npm install bogo

## Usage

```JavaScript

const bogo = require('bogo')(8081);

bogo.on('message', function(data) {
  bogo.emit('reply', {name:'message', data:'Hello from Client!!!11!!'});
});

```
