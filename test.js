import { SHA256 } from './sha256.js';
import assert from 'assert';

const testVectors = [
    {
        input: "",
        expected: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
        input: "abc",
        expected: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
    }
];

console.log("Running SHA-256 Tests...");

try {
    testVectors.forEach(({ input, expected }, index) => {
        const result = SHA256.hash(input);
        assert.strictEqual(result, expected);
        console.log(`Test ${index + 1} Passed: Input "${input}"`);
    });
    console.log("All tests passed successfully.");
} catch (error) {
    console.error("Test Failed:", error.message);
}