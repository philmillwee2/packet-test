module.exports = class Packet {
  constructor(content) {
    this.sBuildVersion = content.readUInt16LE(0);
    this.sPacketType = content.readUInt8(2);
  }
}