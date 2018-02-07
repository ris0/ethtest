contract HelloWorld {
    function displayMessage() constant returns (string) {
        return "Hello from a smart contract";        
    }
}

// constant keyword in this example is saying that 
// this is a function that will not mutate state on the eth network
