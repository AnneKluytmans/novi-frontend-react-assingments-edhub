

// Voorbeeld callback function:

  // 1. We schrijven een functiedeclaratie die een andere functie verwacht (als argument)
function greet(name, callbackFunction) {
    console.log(`Hi ${name}`);
    callbackFunction();
}

  // 2. Vervolgens declareren we een functie die we kunnen gaan meegeven als callback
function logSomething() {
    console.log('You are now logging');
}

  // 3. Wanneer we de greet-functie aanroepen, geven we hier de logSomething functie aan mee
greet('Johan', logSomething);

