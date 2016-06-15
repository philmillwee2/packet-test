const assert = require('chai').assert;
const readFileSync = require('fs').readFileSync;

describe('Packet', function() {
	it('should return 1122 for sBuildVersion', function() {
		const content = readFileSync('../asset/packet/packet_0.bin');
		assert.equal(1122, sBuildVersion = content.readUInt16LE(0));
	});

});