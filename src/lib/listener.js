const dgram = require("dgram");

module.exports = function listener(processMessage) { 
  const server = dgram.createSocket("udp4");

  // Or do I put it here?
  // function processMessage(clientMsg) {
  //   return clientMsg.toString();
  // }

  server.on("message", function(clientMsg, clientHost) {
    if(typeof(processMessage) === "function") {
      processMessage(clientMsg);
    } else {
      server.close();
    }
  });

  server.bind(5606);

  return server;
}