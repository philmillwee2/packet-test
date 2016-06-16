module.exports = class Packet {
  constructor(content) {
    this.sBuildVersion = content.readUInt16LE(0);
    const seq_packet = content.readUInt8(2);
    this.sequenceNumber = seq_packet & 0xFC >> 2;

    // sPacketType
    //  Type-0: The telemetry packet, sent at UDP rate in Gameplay Settings
    //  Type-1: The participant info, sent at the beginning of the race
    //  Type-2: Sent for large games (participants in groups of 16)
    this.sPacketType = seq_packet & 0x3;
    
    this.payload = Buffer.from(content);
  }
}