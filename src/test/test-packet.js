"use strict";

const {join} = require("path");
const {readFileSync} = require("fs");
const {assert} = require("chai");

const Packet = require(join(__dirname, "../lib/packet"));  

describe("Packet Type 0", function() {
  const content = readFileSync(join(__dirname, "../../asset/packet/packet_0.bin"));
  const zero_packet = new Packet(content);
  
  it("should return 1122 for sBuildVersion", function() {    
    assert.equal(zero_packet.sBuildVersion, 1122);
  });

  it("should return 0 for sequenceNumber", function() {
    assert.equal(zero_packet.sequenceNumber, 0);
  });

  it("should return 0 for sPacketType", function() {
    assert.equal(zero_packet.sPacketType, 0);
  });

  it("should have a payload equal (0) to content", function() {
    assert.equal(Buffer.compare(content, zero_packet.payload), 0);
  });
});