const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const acct1 = web3.eth.accounts[0];
const acct2 = web3.eth.accounts[1];
// const acct1Balance = ;
// console.log(acct1Balance);

const balance = (acct) => {
    return web3.fromWei(web3.eth.getBalance(acct), 'ether').toNumber()
}

balance(acct1); // returns 100
balance(acct2); // returns 100

// sending ether from acct 1 to acct2
// from, to, value, gasLimit, gasPrice
web3.eth.sendTransaction({from: acct1, to: acct2, value: web3.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000})
const txHash = _ // how does this copy previous line like that?
web3.eth.getTransaction(txHash) // provides info on transaciton

// nance is a mechanism that prevents you to send duplicate transactions
// easy way to get the ance of an order
web3.eth.getTransactionCount(acct1);
// every transaction on the blockchain needs to have the proper sequential nance

// notice that every transaction we write with web3
// web3 defines an interfaces for those RPC actions that is a couple layers of abstraction

// what if you want to send a transaction offline?
var pKey1 = "763b52d9b065348d623b5c2a3d6960c109cc09c62857b18a6d075f79b5bead6b";
var EthTx = require('ethereumjs-tx'); // requires us to pass javascript buffer...
var pKey1x = new Buffer(pKey1, 'hex') // returns a buffer of private key 1
// next thing is to create a raw transaction data structure and sign with pkey
// just a js object with key/value pairs - needs to encode each integer into a hexidecimal

var rawTx = {
    nance: web3.toHex(web3.eth.getTransactionCount(acct1)),
    to: acct2,
    gasPrice: web3.toHex(20000000000),
    gasLimit: web3.toHex(21000),
    value: web3.toHex(web3.toWei(25, 'ether')),
    data: ''
}

var tx = new EthTx(rawTx);
tx.sign(pKey1x) // using buffer to sign it
tx.serialize().toString('hex');

// 'f86d808504a817c800825208945439050825d6217b10005a411b3592a39ba9074589015af1d78b58c40000801ba0aec4b8d5e48d749ddcc5364a19677dd2df678fdab6c230987e22b06890cc5906a05711b82ca7a29b0447b9da182b728c56d58b1fd0451d3f2e936d9a7a89090f75'
// this contains our transaction data - which could be used at a later date
// or whatever - send it via sendRawTransaction();

web3.eth.sendRawTransaction(`0x${tx.serialize().toString('hex')}`, (error, data) => {
    if (!error) { console.log(data) }
});

// interact with the mainnet via metamask
// it gives you an ethereum wallet with chrome extension while running the network
// shapeshift allows you to quickly transact between different cryptocurrencies
