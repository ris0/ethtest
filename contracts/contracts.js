/****
 * Ethereum allows us to deploy arbitrary computations to the Ethereum
 * network through the form of Smartcontracts!
 * 
 * Smart contracts: series of EVM op codes as defined in the white paper
 * We use compilers that converts code into this EVM op codes
 * Solidity looks like Java || statically typed language
 * 
 * We are not going to use the C++ compiler
 * but we'll be using the JavaScript compiler
 * solc -- available as an NPM package :D
 */

 const Web3 = require('web3');
 const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
 const solc = require('solc');

 // var compiled = solc.compile(source)
// compiled.contracts.HelloWorld

var source = `contract HelloWorld {
    function displayMessage() constant returns (string) {
        return "Hello from a smart contract";        
    }
}`

var compiled = solc.compile(source);
var bytecode = compiled.contracts[":HelloWorld"].bytecode // returns EVM byte code
compiled.contracts[":HelloWorld"].opcodes // 1:1 mapping of above byte code

var abi = compiled.contracts[":HelloWorld"].interface // defines the public facing interface of your contract
var helloWorldContract = web3.eth.contract(JSON.parse(abi)); // now we have our smart contract that can be deployed to testRpc
// abi needs to be a javascript array rather than a string

var deployed = helloWorldContract.new({
    from: web3.eth.accounts[0],
    data: bytecode, // send the actual bytecode of the contract that we want to deploy; remember that code contains the opcodes necessary
    gas: 4700000,// use solidity online compiler to determine gas costs http://ethereum.github.io/browser-solidity/
    gasPrice: 5
}, (error, contract) => { error ? console.log(error) : console.log(contract)})

// now in testrpc you should be able to see the tx and contract hash
// essentially two types of addresses: personal and contract
// if we inspect the recent transaction - we'll notice that the input contains the bytecode from the respective smart contract

// this deployed object that is returned is actually a reference to the deployed contract on the network
// deployed.address
// if for some reason we didn't capture that deployed object
// helloWorldContract.at(//address)

// once you have the reference, you can call public methods
// i.e deployed.displayMessage.call();
