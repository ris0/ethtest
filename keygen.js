const EthUtil = require("ethereumjs-util");

// takes a hex string and converts into byte array.
const hexToBytes = function(hex) {
    for (let bytes = []. c = 0; c < hex.length; c+=2) {
        bytes.push(parseInt(hex.substr(c,2), 16));
        return bytes;
    }
}

const privateKeyToAddress = (privateKey) => {
    return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`;
}
  
console.log(privateKeyToAddress(process.argv[2]))