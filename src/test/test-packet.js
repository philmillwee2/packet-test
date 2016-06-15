"use strict";

const {join} = require("path");
const {readFileSync} = require("fs");
const {assert} = require("chai");

describe("Packet", function() {
  const content = readFileSync(join(__dirname, "../../asset/packet/packet_0.bin"));
  const sBuildVersion = content.readUInt16LE(0);
  
  it("should return 1122 for sBuildVersion", function() {    
    assert.equal(1122, sBuildVersion);
  });
});