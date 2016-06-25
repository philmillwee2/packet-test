"use strict";

const {join} = require("path");
const {assert} = require("chai");
const dgram = require("dgram");
const util = require("util");

const listener = require(join(__dirname, "../lib/listener"));

describe("Listener", function () {
  let queue = [];

  function processMessage(clientMsg) {
    queue.push(clientMsg.toString());
  }

  const server = listener(processMessage);

  it("should return 0.0.0.0 for listener address", function() {
    const properties = server.address();
    assert.equal(properties.address, "0.0.0.0");
  });

  it("should return 5606 for the port", function() {
    const properties = server.address();
    assert.equal(properties.port, "5606");
  });

  it("should return a valid message", function() {
    const client = dgram.createSocket("udp4");

    client.send(Buffer.from("This is a valid message"), 5606, "localhost", function(err) {
      return new Promise(function(resolve) {
        server.on("message", function() {
          assert.equal(queue.pop(), "This is a valid message");
        });
      });
    });
  });
});