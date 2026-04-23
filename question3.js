function greetingBot(name, isMorning) {
    // i wrote a really basic ternary operator for the conditional logic
    return isMorning ? `Good morning, ${name}!` : `Oh, it's just you ${name}!`;
}

// for testing the function
console.log(greetingBot("Kago", true));  // Good morning, Kago!
console.log(greetingBot("Ashley", false));   // Oh, it's just you Ashley.