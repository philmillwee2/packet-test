"use strict";

const {join} = require("path");
const {assert} = require("chai");
const dgram = require("dgram");
const util = require("util");

const listener = require(join(__dirname, "../lib/listener"));

describe("Listener", function () {
  var queue = [];

  // Do I put the callback inside the location creating the listener?
  function processMessage(clientMsg) {
    queue.push(clientMsg.toString());
  }

  const socket = listener(processMessage);

  it("should return 0.0.0.0 for listener address", function () {
    const properties = socket.address();
    assert.equal("0.0.0.0", properties.address);
  });

  it("should return a valid message", function() {
    const client = dgram.createSocket("udp4");

    client.send(Buffer.from("This is a valid message"), 5606, "localhost", (err) => {
      client.close();
    });

    // How do I process a message from the callback?
    assert.equal("This is a valid message", queue.pop());
  });
});