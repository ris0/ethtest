const EthUtil = require("ethereumjs-util");

// takes a hex string and converts into byte array.
const hexToBytes = function(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c,2), 16));
        return bytes;
    }
}

const privateKeyToAddress = function(privateKey) {
    return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`;
}
  
console.log(privateKeyToAddress(process.argv[2]))
// you can sign arb strings of data and then verify if they were signed with your public key
