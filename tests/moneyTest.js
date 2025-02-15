import { cents_to_dollars } from "../scripts/utils/money.js"

console.log("test suite: cents_to_dollars")
console.log('basic test case:')
(cents_to_dollars(2095) === '20.95') ? (console.log('passed')) : (console.log('failed'));
console.log('edge test cases:')
(cents_to_dollars(0) === '0.00') ? (console.log('passed')) : (console.log('failed'));
(cents_to_dollars(2000.5) === '20.01') ? (console.log('passed')) : (console.log('failed'));
(cents_to_dollars(2000.4) === '20.00') ? (console.log('passed')) : (console.log('failed'));