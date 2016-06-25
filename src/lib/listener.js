"use strict";

const dgram = require("dgram");

module.exports = function listener(processMessage) { 
  const server = dgram.createSocket("udp4");

  server.on("message", function(clientMsg, clientHost) {
    processMessage(clientMsg);
  });

  server.bind(5606);

  return server;
};