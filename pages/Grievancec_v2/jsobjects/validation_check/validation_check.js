export default {
  myVar1: [],
  myVar2: {},
  myFun1 () {
    // Extracting client_key from Auth_API data
		
    const client_key = Auth_API.data.ClientKey;
    
    // Checking if client_key exists
    if (client_key) {
      storeValue("client_key", client_key); // Store the client key if exists

    } else {
      return "Bad Request"; // Return 'Bad Request' if client_key does not exist
    }
  },
  async myFun2 () {
    // Example of using async-await
    await storeValue('varName', 'hello world');
  }
}
