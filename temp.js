// halting problem:
// it is impossible to write a function that determines
// if another function runs indefinitely or terminates at any given point

const halt = function(f) {
    // returns TRUE if f halts, returns FALSE if f is infinite
}

// Ethereum's workaround to this issue was the implementation of gas
// Preventing arb code to waste computational resources
// EVM opcodes : https://ethereum.stackexchange.com/questions/119/what-opcodes-are-available-for-the-ethereum-evm

// exchange rates for gas can be found on ethstats.net
// the gas is always fixed as a cost for computational step

// determining cost of gas
// 21000 gas to execute gtx
web3.fromWei(web3.toWei(20, "gwei") * 21000, "ether");