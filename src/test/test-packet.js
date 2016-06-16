"use strict";

const {join} = require("path");
const {readFileSync} = require("fs");
const {assert} = require("chai");

const Packet = require(join(__dirname, "../lib/Packet"));  

describe("Packet Type 0", function() {
  const content = readFileSync(join(__dirname, "../../asset/packet/packet_0.bin"));
  const zero_packet = new Packet(content);
  
  it("should return 1122 for sBuildVersion", function() {    
    assert.equal(1122, zero_packet.sBuildVersion);
  });

  it("should return 0 for sequenceNumber", function() {
    assert.equal(0, zero_packet.sequenceNumber);
  });

  it("should return 0 for sPacketType", function() {
    assert.equal(0, zero_packet.sPacketType);
  });

  it("should have a payload equal (0) to content", function() {
    assert.equal(0, Buffer.compare(content, zero_packet.payload));
  });
});