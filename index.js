const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.accounts


// ETH private key is a valid 64 character string
// not cap sensitive
// SHA can hash any string into 64 character hexadecimal string

web3.sha3("asdfasdfasdfasdfasdf"); // deterministic

const randomString = "DogMeowCatRatPatsWackHat"
const sha = web3.sha3(web3.sha3(randomString));
console.log(sha);
