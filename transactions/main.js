// ## SENDING TRANSACTIONS with CODE

// interact with the mainnet via metamask
// it gives you an ethereum wallet with chrome extension while running the network
// shapeshift allows you to quickly transact between different cryptocurrencies

// infura is a project under the umbrella of ethereum dev shop consensus
const endpoint = "https://mainnet.infura.io/Q6DaBVkKRpQcLDSqAXP3" // infura/ethereum mainnet endpoint
const Web3 = require('web3');
const EthTx = require('ethereumjs-tx');
const web3 = new Web3(new Web3.providers.HttpProvider(endpoint));

// address that we are sneding from and too
const addr1 = '0x4a84427DC29eE3995bE23A40eB02ed83A2a64D57';
const addr2 = '0x32a35D8d40309dfDd0DF30ddD2f591421139d913'

const rawTx = {
    nance: web3.toHex(web3.eth.getTransactionCount(addr1)),
    to: addr2,
    gasPrice: web3.toHex(21000000000),
    gasLimit: web3.toHex(21000),
    value: web3.toHex(web3.toWei(0, 'ether')),
    data: ''
}

// only need private key to sign a transaction
const pKey1 = 'REPLACE PRIAVTE KEY HERE'
const pKey1x = new Buffer(pKey1, 'hex'); // remember its expecting a buffer as data type
let tx = new EthTx(rawTx) // create transaction object
tx.sign(pKey1x) // sign with private key as stated earlier
const serializedTx = `0x${tx.serialize().toString('hex')}`

// returns hash that you can use for look up on etherescan
web3.eth.sendRawTransaction(serializedTx, (error, data) => {
    if (!error) { 
        console.log(data);
    } else {
        console.log(error);
    }
})