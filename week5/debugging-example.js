// Example with a bug
function addNumbers(a, b) {
    console.log("Adding numbers:", a, "+", b);
    return a + b;
}

// Bug: forgot parentheses during function call
const result = addNumbers(5, 10);
console.log("Result is:", result);
