// q6 Tasks
export const text_q6_1 = 'Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. \n Return your answer as a number.;' // https://www.codewars.com/kata/57eaeb9578748ff92a000009/javascript
export const text_q6_2 = 'Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). \n Examples \n n = 0  ==> [1]        # [2^0] \n n = 1  ==> [1, 2]     # [2^0, 2^1] \n n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]'; // https://www.codewars.com/kata/57a083a57cb1f31db7000028
export const text_q6_3 = 'Multiply two numbers together.' // https://www.codewars.com/kata/50654ddff44f800200000004
export const text_q6_4 = 'Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.You can assume that all values are integers. Do not mutate the input array.'; // https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
export const text_q6_5 = 'Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n. '; // https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
export const text_q6_6 = 'Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by Chinese Yuan (CNY). The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")'; // https://www.codewars.com/kata/5977618080ef220766000022
export const text_q6_7 = `At the annual family gathering, the family likes to find the oldest living family members age and the youngest family members age and calculate the difference between them.You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed age of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].`; // https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

// q6 FuncStart
export const function_name_q6_1 = 'function sumMix(x){ \n\ \n\}';
export const function_name_q6_2 = 'function powersOfTwo(n){ \n\  \n\ }';
export const function_name_q6_3 = 'function multiply(a,b){ \n\ \n\ }';
export const function_name_q6_4 = 'function getAdditiveInverse(array) { \n\ \n\ }';
export const function_name_q6_5 = 'function nearestSq(n){ \n\ \n\ }';
export const function_name_q6_6 = 'function usdToCny(usd){ \n\ \n\ }';
export const function_name_q6_7 = 'function differenceInAges(ages){ \n\ \n\ }';

// q6 Examples
export const text_example_q6_1 = `First example: \n\ x =  [6,'3',-3,0] --> 6 `;
export const second_example_q6_1 = `Second example: \n\ x =  [-2,'-3',-3,12, -21] --> -17`;
export const text_example_q6_2 = 'First example: \n\ n = 0  ==> [1]        # [2^0]';
export const second_example_q6_2 = 'Second example: \n\ n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]';
export const text_example_q6_3 = 'First example : \n\ a = 6, b = 3  ==> 18'; 
export const second_example_q6_3 = 'Second example : \n\ a = -2, b = -3  ==> -6'; 
export const text_example_q6_4 = 'First example : [1, -2, 3, 4, -5] ==> [-1, 2, -3, -4, 5]';
export const second_example_q6_4 = 'Second example : [] --> [] \n ';
export const text_example_q6_5 = 'For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.';
export const second_example_q6_5 = 'If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.';
export const text_example_q6_6 = `First example 15 : -> '101.25 Chinese Yuan'`
export const second_example_q6_6 = ` Second example : 465 -> '3138.75 Chinese Yuan''`
export const text_example_q6_7 = 'First example : [10, 20, 15, 30, 25, 5] ==> [5, 30, 25]';
export const second_example_q6_7 = 'Second example : [30, 25, 40, 15, 20, 5] ==> [5, 40, 35]';

// q6 tests
export const testCases_q6_1 = [
  { inputA: [6,'3',-3,0], expected: 6 },
  { inputA: [6,'-3',-3,12], expected: 12 },
  { inputA: [-2,'-3',-3,12, -21], expected: -17 },
];
export const testCases_q6_2 = [
  { inputA: [0], expected: [1] },
  { inputA: [1], expected: [1,2] },
  { inputA: [4], expected: [1,2,4,8,16] },
]
export const testCases_q6_3 = [
  { inputA: 6,inputB: 3 , expected: 18 },
  { inputA: -2, inputB: -3, expected: 6 },
  { inputA: -6, inputB: 0, expected: 0 },
]
export const testCases_q6_4 = [
{ inputA: [1, -2, 3, 4, -5], expected: [-1, 2, -3, -4, 5] },
{ inputA: [], expected: [] },
{ inputA: [1, 2, 3, 4, 5], expected: [-1, -2, -3, -4, -5] },
]
export const testCases_q6_5 = [
{inputA: 111, expected: 121 },
{inputA: 9999, expected: 10000 },
{inputA: 0, expected: 0 },
]
export const testCases_q6_6 = [
{inputA: 15, expected: '101.25 Chinese Yuan' },
{inputA: 465, expected: '3138.75 Chinese Yuan' },
{inputA: 123, expected: '830.25 Chinese Yuan' },

]
export const testCases_q6_7 = [
{inputA: [10, 20, 15, 30, 25, 5], expected: [5, 30, 25] },
{inputA: [30, 25, 40, 15, 20, 5], expected: [5, 40, 35] },
{inputA: [82, 15, 6, 38, 35] , expected : [6, 82, 76] },
]

// q6 Func param 
export const userFunction_q6_1 = 'x'
export const userFunction_q6_2 = 'n'
export const userFunction_q6_3 = ['a', 'b']
export const userFunction_q6_4 = 'array'
export const userFunction_q6_5 = 'n'
export const userFunction_q6_6 = 'usd'
export const userFunction_q6_7 = 'ages'




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// q5 Task
export const text_q5_1 = 'Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9s. Return -1 if no such m exists. '; // https://www.codewars.com/kata/664b9dd610985cc3b6784111/javascript
export const text_q5_2 = 'Given an array of ones and zeroes, convert the equivalent binary value to an integer. \n Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.'; // https://www.codewars.com/kata/578553c3a1b8d5c40300037c
export const text_q5_3 = 'You will be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string. \n Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.'; // https://www.codewars.com/kata/586efc2dcf7be0f217000619
export const text_q5_4 = 'Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element. \n Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.'; // https://www.codewars.com/kata/5a5915b8d39ec5aa18000030
export const text_q5_5 = 'Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.'; // https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
export const text_q5_6 = 'Given a non-negative integer, return an array / a list of the individual digits in order.'; // https://www.codewars.com/kata/5417423f9e2e6c2f040002ae
export const text_q5_7 = 'Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integers divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string "(integer) is prime" (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).'; // https://www.codewars.com/kata/544aed4c4a30184e960010f4
export const text_q5_8 = 'Two numbers are relatively prime if their greatest common factor is 1; in other words: if they cannot be divided by any other common numbers than 1. \n 13, 16, 9, 5, and 119 are all relatively prime because they share no common factors, except for 1. To see this, I will show their factorizations:' // https://www.codewars.com/kata/56b0f5f84de0afafce00004e

// q5 FuncStart
export const function_name_q5_1 = 'function allNines(x) { \n  \n }';
export const function_name_q5_2 = 'const binaryArrayToNumber = arr => { \n   \n };';
export const function_name_q5_3 = 'function reverseSlice(str) { \n \n}';
export const function_name_q5_4 = 'function findMissing(arr1, arr2) { \n \n }';
export const function_name_q5_5 = 'function evenNumbers(array, number) { \n \n }';
export const function_name_q5_6 = 'function digitize(n) { \n \n }';
export const function_name_q5_7 = 'function divisors(integer) { \n \n };';
export const function_name_q5_8 = 'function relativelyPrime(n, arr) { \n \n }'
export const function_name_q5_9 = '';

// q5 Examples
export const text_example_q5_1 = '';
export const second_example_q5_1 = 'Examples: \n 11 -> 9, because 11 * 9 == 99. \n 12 -> -1, because 12 is even, so no multiple of it can contain only nines. \n 13 -> 76923, because 13 * 76923 == 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only nines. \n NOTE: Although x ≤ 4000, m can be very very LARGE. Where necessary, the way of handling big integers appropriate to the language should be used. ';
export const text_example_q5_2 = 'However, the arrays can have varying lengths, not just limited to 4.';
export const second_example_q5_2 = 'Examples: \n Testing: [0, 0, 0, 1] ==> 1 \n Testing: [0, 0, 1, 0] ==> 2 \n Testing: [0, 1, 0, 1] ==> 5 \n Testing: [1, 0, 0, 1] ==> 9 \n Testing: [0, 0, 1, 0] ==> 2 \n Testing: [0, 1, 1, 0] ==> 6 \n Testing: [1, 1, 1, 1] ==> 15 \n Testing: [1, 0, 1, 1] ==> 11';
export const text_example_q5_3 = '';
export const second_example_q5_3 = 'Examples \n "123"  ==>  ["321", "21", "1"] \n "abcde" ==>  ["edcba", "dcba", "cba", "ba", "a"]';
export const text_example_q5_4 = 'The first array will always have at least one element.';
export const second_example_q5_4 = 'find_missing([1, 2, 2, 3], [1, 2, 3]) => 2 \n find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8';
export const text_example_q5_5 = '';
export const second_example_q5_5 = 'For example: \n ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8] \n ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26] \n ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]';
export const text_example_q5_6 = '';
export const second_example_q5_6 = 'Examples: \n 123 => [1,2,3] \n 1 => [1] \n 8675309 => [8,6,7,5,3,0,9]';
export const text_example_q5_7 = '';
export const second_example_q5_7 = 'Example: \n divisors(12); // should return [2,3,4,6] \n divisors(25); // should return [5] \n divisors(13); // should return "13 is prime"';
export const text_example_q5_8 = ' Examples \n relatively_prime(8, [1, 2, 3, 4, 5, 6, 7]) \n >> [1, 3, 5, 7] \n relatively_prime(15, [72, 27, 32, 61, 77, 11, 40]) \n >> [32, 61, 77, 11] \n relatively_prime(210, [15, 100, 2222222, 6, 4, 12369, 99]) \n >> []';
export const second_example_q5_8 = ' 13: 13 \n 16: 2 * 2 * 2 * 2 \n  9: 3 * 3 \n  5: 5 \n 119: 17 * 7 \n Complete the function that takes 2 arguments: a number (n), and a list of numbers (arr). The function should return a list of all the numbers in arr that are relatively prime to n. All numbers in will be positive integers.';

// q5 Tests
export const test_q5_1 = [
  { inputA: 11, expected: 9 },
  { inputA: 12, expected: -1 },
  { inputA: 13, expected: 76923 },
  ];
export const test_q5_2 = [
  { inputA: [0, 0, 0, 1], expected: 1 },
  { inputA: [0, 0, 1, 0], expected: 2 },
  { inputA: [0, 1, 0, 1], expected: 5 },
  { inputA: [1, 0, 0, 1], expected: 9 },
  { inputA: [0, 0, 1, 0], expected: 2 },
  { inputA: [0, 1, 1, 0], expected: 6 },
  { inputA: [1, 1, 1, 1], expected: 15 },
  { inputA: [1, 0, 1, 1], expected: 11 },
];
export const test_q5_3 = [
  { inputA: '123', expected: ['321', '21', '1'] },
  { inputA: 'abcde', expected: ['edcba', 'dcba', 'cba', 'ba', 'a'] },
  { inputA: '12345', expected: ['54321', '4321', '321', '21', '1'] },
];
export const test_q5_4 = [
  {inputA: [1, 2, 2, 3], inputB: [1, 2, 3], expected: 2},
  {inputA: [6, 1, 3, 6, 8, 2], inputB: [3, 6, 6, 1, 2], expected: 8},
  {inputA: [3, 2, 6, 6, 1, 2], inputB: [3, 4, 6, 5, 2], expected: 1},
];
export const test_q5_5 = [
  {inputA: [1, 2, 2, 3], inputB: [1, 2, 3], expected: 2},
  {inputA: [6, 1, 3, 6, 8, 2], inputB: [3, 6, 6, 1, 2], expected: 8},
  {inputA: [3, 2, 6, 6, 1, 2], inputB: [3, 4, 6, 5, 2], expected: 1},
];
export const test_q5_6 = [
  {inputA: 123, expected: [1, 2, 3]},
  {inputA: 1, expected: [1]},
  {inputA: 8675309, expected: [8, 6, 7, 5, 3, 0, 9]},
];
export const test_q5_7 = [
  {inputA: 12, expected: [2, 3, 4, 6]},
  {inputA: 25, expected: [5]},
  {inputA: 13, expected: '13 is prime'},
];
export const test_q5_8 = [
  {inputA: 8, inputB: [1, 2, 3, 4, 5, 6, 7], expected: [1, 3, 5, 7]},
  {inputA: 15, inputB: [72, 27, 32, 61, 77, 11, 40], expected: [32, 61, 77, 11]},
  {inputA: 210, inputB: [15, 100, 2222222, 6, 4, 12369, 99], expected: []},
];

// q5 Func param
export const userFunction_q5_1 = 'x';
export const userFunction_q5_2 = 'arr';
export const userFunction_q5_3 = 'str';
export const userFunction_q5_4 = ['arr1','arr2'];
export const userFunction_q5_5 = ['array','number'];
export const userFunction_q5_6 = 'n';
export const userFunction_q5_7 = 'integer';
export const userFunction_q5_8 = ['n', 'arr'];




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// q4 Tasks
export const text_q4_1 = 'Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.'; // https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
export const text_q4_2 = 'Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.'; // https://www.codewars.com/kata/6656a4687f3e4eb5fb520817
export const text_q4_3 = 'You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.'; // https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
export const text_q4_4 = 'In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.'; // https://www.codewars.com/kata/59e66e48fc3c499ec5000103
export const text_q4_5 = 'Welcome. \n In this kata you are required to, given a string, replace every letter with its position in the alphabet. \n If anything in the text isnt a letter, ignore it and dont return it. \n "a" = 1, "b" = 2, etc.'; // https://www.codewars.com/kata/546f922b54af40e1e90001da
export const text_q4_6 = 'A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). \n Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.'; // https://www.codewars.com/kata/545cedaa9943f7fe7b000048
export const text_q4_7 = '';

// q4 FuncStart
export const function_name_q4_1 = 'function persistence(num) { \n //code me \n }';
export const function_name_q4_2 = 'function evenOrOdd(n) { \n  //"Even" or "Odd" \n }';
export const function_name_q4_3 = 'function sortArray(array) { \n  // Return a sorted array. \n }';
export const function_name_q4_4 = 'function solve(arr) { \n  return 0; \n };';
export const function_name_q4_5 = 'function alphabetPosition(text) { \n  return text; \n }';
export const function_name_q4_6 = 'function isPangram(string){ \n  //... \n }';
export const function_name_q4_7 = '';

// q4 Examples
export const text_example_q4_1 = '';
export const second_example_q4_1 = 'For example (Input --> Output): \n 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications) \n 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications) \n 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)';
export const text_example_q4_2 = '';
export const second_example_q4_2 = 'For example: \n evenOrOdd(2); //"Even" \n evenOrOdd[2]; //"Even" \n evenOrOdd(7); //"Odd" \n evenOrOdd[7]; //"Odd"';
export const text_example_q4_3 = '';
export const second_example_q4_3 = 'Examples \n [7, 1]  =>  [1, 7] \n [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4] \n [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]';
export const text_example_q4_4 = 'Make sure that you dont count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.';
export const second_example_q4_4 = 'For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].';
export const text_example_q4_5 = '';
export const second_example_q4_5 = 'Example \n Input = "The sunset sets at twelve o clock." \n Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"';
export const text_example_q4_6 = '';
export const second_example_q4_6 = '';
export const text_example_q4_7 = '';
export const second_example_q4_7 = '';

// q4 Tests
export const test_q4_1 = '';
export const test_q4_2 = '';
export const test_q4_3 = '';
export const test_q4_4 = '';
export const test_q4_5 = '';
export const test_q4_6 = '';
export const test_q4_7 = '';

// q4 Func Param
export const userFunction_q4_1 = 'num';
export const userFunction_q4_2 = 'n';
export const userFunction_q4_3 = 'array';
export const userFunction_q4_4 = 'arr';
export const userFunction_q4_5 = 'text';
export const userFunction_q4_6 = 'string';
export const userFunction_q4_7 = '';




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q3 Tasks
export const text_q3_1 = 'Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.'; // https://www.codewars.com/kata/526d42b6526963598d0004db
export const text_q3_2 = 'You are given the outline of a Rational class to do arithmetic with rational numbers. \n Complete the class filling in the operations for simplifying, comparing, adding, subtracting, multiplying, and dividing Rationals. \n None of the operations (except for the constructor and the simplify) should modify the Rational.'; // https://www.codewars.com/kata/5260074c9a0022f83e0009da
export const text_q3_3 = 'Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one). \n All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one. \n Examples \n * With input "10.0.0.0", "10.0.0.50"  => return   50  \n * With input "10.0.0.0", "10.0.1.0"   => return  256  \n * With input "20.0.0.10", "20.0.1.0"  => return  246'; // https://www.codewars.com/kata/526989a41034285187000de4
export const text_q3_4 = 'Complete the greatestProduct method so that itll find the greatest product of five consecutive digits in the given string of digits. \n For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240. \n The input string always has more than five digits. \n Adapted from Project Euler.'; // https://www.codewars.com/kata/529872bdd0f550a06b00026e
export const text_q3_5 = 'Youre going to provide a needy programmer a utility method that generates an infinite amount of sequential fibonacci numbers. \n to do this return an Iterator<BigInt> starting with 1 \n A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See: \n 1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...'; // https://www.codewars.com/kata/55695bc4f75bbaea5100016b
export const text_q3_6 = 'In this Kata, you will be given a string of numbers in sequence and your task will be to return the missing number. If there is no number missing or there is an error in the sequence, return -1. \n For example: \n missing("123567") = 4  \n missing("899091939495") = 92 \n missing("9899101102") = 100 \n missing("599600601602") = -1 -- no number missing \n missing("8990919395") = -1 -- error in sequence. Both 92 and 94 missing. \n The sequence will always be in ascending order. \n More examples in the test cases. \n Good luck!'; // https://www.codewars.com/kata/5a28cf591f7f7019a80000de
export const text_q3_7 = 'Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes? \n Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0. \n Examples: \n // must return 2 \n cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});  \n // must return 0 \n cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); '; //https://www.codewars.com/kata/525c65e51bf619685c000059

//Q3 FuncStart
export const function_name_q3_1 = 'var CaesarCipher = function (shift) { \n  // TODO: Complete the CaesarCipher object \n };';
export const function_name_q3_2 = '';
export const function_name_q3_3 = '';
export const function_name_q3_4 = '';
export const function_name_q3_5 = '';
export const function_name_q3_6 = '';
export const function_name_q3_7 = '';

//Q3 Examples
export const text_example_q3_1 = ' \n If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is. \n The shift will always be in range of [1, 26].';
export const second_example_q3_1 = '\n For example: \n var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five \n c.encode(Codewars); // returns HTIJBFWX \n c.decode(BFKKQJX); // returns WAFFLES ';
export const text_example_q3_2 = '';
export const second_example_q3_2 = '';
export const text_example_q3_3 = '';
export const second_example_q3_3 = '';
export const text_example_q3_4 = '';
export const second_example_q3_4 = '';
export const text_example_q3_5 = '';
export const second_example_q3_5 = '';
export const text_example_q3_6 = '';
export const second_example_q3_6 = '';
export const text_example_q3_7 = '';
export const second_example_q3_7 = '';

//Q3 Tests
export const test_q3_1 = '';
export const test_q3_2 = '';
export const test_q3_3 = '';
export const test_q3_4 = '';
export const test_q3_5 = '';
export const test_q3_6 = '';

// q3 Func Param
export const userFunction_q3_1 = 'shift';
export const userFunction_q3_2 = '';
export const userFunction_q3_3 = '';
export const userFunction_q3_4 = '';
export const userFunction_q3_5 = '';
export const userFunction_q3_6 = '';
export const userFunction_q3_7 = '';




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q2 Tasks
export const text_q2_1 = 'Prelude \n The painting fence problem involves finding the number of ways to paint a fence with n posts and k colors, assuming that no more than two adjacent posts have the same color. \n Task \n Your task is to implement a function named ways(n, k) that takes two BigInts as input: \n n The number of posts in the fence. \n k The number of colors available for painting the fence. \n And returns the number of ways of painting the fence such that no more than two adjacent posts have the same color. A linear time solution is much too slow for this problem; the numbers will be up to 10 billion! \n Examples \n ways(1n, 4n) -> 4n \n ways(3n, 2n) -> 6n \n ways(4n, 5n) -> 580n \n Constraints \n n and k will not be greater than 10,000,000,000 or less than 1. \n Note, result will get very large, return it mod 1000000007'; // https://www.codewars.com/kata/64bc4a428e1e9570fd90ed0d
export const text_q2_2 = 'The task is simply stated. Given an integer n (3 < n < 109), find the length of the smallest list of perfect squares which add up to n. Come up with the best algorithm you can; youll need it! \n Examples: \n sum_of_squares(17) = 2 \n 17 = 16 + 1 (16 and 1 are perfect squares). \n sum_of_squares(15) = 4 \n 15 = 9 + 4 + 1 + 1. There is no way to represent 15 as the sum of three perfect squares. \n sum_of_squares(16) = 1 \n 16 itself is a perfect square. \n Time constraints: \n 5 easy (sample) test cases: n < 20 \n 5 harder test cases: 1000 < n < 15000 \n 5 maximally hard test cases: 5e8 < n < 1e9 \n 100 random maximally hard test cases: 1e8 < n < 1e9'; // https://www.codewars.com/kata/5a3af5b1ee1aaeabfe000084
export const text_q2_3 = 'In this kata, you are given a prime number p. Your goal is to generate an array of p² + p + 1 arrays, each consisting of p + 1 distinct numbers between 1 and p² + p + 1 included. This set of arrays is such that for any pair of arrays, they both have exactly one number in common. \n For example, a valid output for p = 2 is: \n [ \n   [7,2,4], \n   [1,7,3], \n   [4,3,5], \n   [6,4,1], \n   [1,2,5], \n   [2,6,3], \n   [6,5,7] \n ] \n The order of the output does not matter. The input range tested for this kata goes up to p = 31.'; // https://www.codewars.com/kata/5e335f9712b02a001a874eef
export const text_q2_4 = 'A format for expressing an ordered list of integers is to use a comma separated list of either \n individual integers \n or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, "-". The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17" \n Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format. \n Example: \n solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]); \n // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"'; // https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
export const text_q2_5 = 'Consider a sequence u where u is defined as follows: \n The number u(0) = 1 is the first one in u. \n For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too. \n There are no other numbers in u. \n Ex:  u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...] \n 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on... \n Task: \n Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates). \n Example: \n dbl_linear(10) should return 22 \n Note: \n Focus attention on efficiency'; // https://www.codewars.com/kata/5672682212c8ecf83e000050
export const text_q2_6 = 'The problem \n How many zeroes are at the end of the factorial of 10? 10! = 3628800, i.e. there are 2 zeroes. 16! (or 0x10!) in hexadecimal would be 0x130777758000, which has 3 zeroes. \n Scalability \n Unfortunately, machine integer numbers has not enough precision for larger values. Floating point numbers drop the tail we need. We can fall back to arbitrary-precision ones - built-ins or from a library, but calculating the full product isnt an efficient way to find just the tail of a factorial. Calculating 100 000! in compiled language takes around 10 seconds. 1 000 000! would be around 10 minutes, even using efficient Karatsuba algorithm \n Your task \n is to write a function, which will find the number of zeroes at the end of (number) factorial in arbitrary radix = base for larger numbers. \n base is an integer from 2 to 256 \n number is an integer from 1 to 1 000 000 \n Note Second argument: number is always declared, passed and displayed as a regular decimal number. If you see a test described as 42! in base 20 it s 4210 not 4220 = 8210.'; // https://www.codewars.com/kata/55c4eb777e07c13528000021
export const text_q2_7 = 'Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. \n Example: \n Given an input string of: \n apples, pears # and bananas \n grapes \n bananas !apples \n The output expected would be: \n apples, pears \n grapes \n bananas \n The code would be called like so: \n var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]) \n // result should == "apples, pears\ngrapes\nbananas"'; // https://www.codewars.com/kata/51c8e37cee245da6b40000bd

//Q2 FuncStart
export const function_name_q2_1 = '';
export const function_name_q2_2 = '';
export const function_name_q2_3 = '';
export const function_name_q2_4 = '';
export const function_name_q2_5 = '';
export const function_name_q2_6 = '';
export const function_name_q2_7 = '';

//Q2 Examples
export const text_example_q2_1 = '';
export const second_example_q2_1 = '';
export const text_example_q2_2 = '';
export const second_example_q2_2 = '';
export const text_example_q2_3 = '';
export const second_example_q2_3 = '';
export const text_example_q2_4 = '';
export const second_example_q2_4 = '';
export const text_example_q2_5 = '';
export const second_example_q2_5 = '';
export const text_example_q2_6 = '';
export const second_example_q2_6 = '';
export const text_example_q2_7 = '';
export const second_example_q2_7 = '';

//Q6 Tests
export const test_q2_1 = '';
export const test_q2_2 = '';
export const test_q2_3 = '';
export const test_q2_4 = '';
export const test_q2_5 = '';
export const test_q2_6 = '';




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q1 Tasks
export const text_q1_1 = 'This is a hard version of How many are smaller than me?. If you have troubles solving this one, have a look at the easier kata first. \n Write \n function smaller(arr) \n that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right. \n For example: \n smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0] \n smaller([1, 2, 0]) === [1, 1, 0] \n Note \n Your solution will be tested against inputs with up to 100_000 elements'; // https://www.codewars.com/kata/56a1c63f3bc6827e13000006
export const text_q1_2 = 'Create an endless stream that yields prime numbers. The stream must be able to produce a million primes in a few seconds. \n If this is too easy, try Prime Streaming (NC-17).'; // https://www.codewars.com/kata/5519a584a73e70fa570005f5
export const text_q1_3 = 'Task \n You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of location altitudes (ascending or descending). \n Location altitude is defined as an integer number (0-9). \n Path Finder Series: \n #1: can you reach the exit? \n #2: shortest path \n #3: the Alpinist \n #4: where are you? \n #5: theres someone here \n '; // https://www.codewars.com/kata/576986639772456f6f00030c
export const text_q1_4 = 'In this Kata, you will be given boolean values and boolean operators. Your task will be to return the number of arrangements that evaluate to True. \n t,f will stand for true, false and the operators will be Boolean AND (&), OR (|), and XOR (^). \n For example, solve("tft","^&") = 2, as follows: \n "((t ^ f) & t)" = True \n "(t ^ (f & t))" = True \n Notice that the order of the boolean values and operators does not change. What changes is the position of braces. \n More examples in the test cases. \n Good luck!'; // https://www.codewars.com/kata/59eb1e4a0863c7ff7e000008
export const text_q1_5 = 'If youd like to take a breather before continuing with this challenge, you may want to complete Generate BF Program from Target Output Brainfuck generator first. \n Original Task \n Write a function that receives a string as input and outputs a valid BF program that evaluates to the given string. There is no restriction as to how long or how short your output program must be for any given string but if youre feeling up for the challenge then do try to make your code generator optimise the BF code so that it contains as few characters as possible. A BF interpreter interpreter() has been preloaded for you. \n Additional Requirements \n In addition to the instructions specified above, a reference solution reference() has also been preloaded for you. In this Kata, your solution must always return a shorter BF program in terms of character count compared to that returned by the reference solution for all input strings of length >= 20.'; // https://www.codewars.com/kata/585e3bec6d36a5cad5000103
export const text_q1_6 = 'Preface \n This is the crazy hard version of the Prime Ant - Performance Version kata. If you did not complete it yet, you should begin there. \n Description, task and examples \n Everything is exactly the same as in the previous version (see above). You should really complete that first, then take your solution here and get started! \n Tests \n Now this is where we re going crazy! You will have 2000 test cases in the 106 to 2 * 106 range. Sounds too much? No, it isnt: the reference solution can do almost the double before timing out. Sounds too few? Well, you must leave some room for less optimized solutions :-) Also, CW would choke because of too much output...'; // https://www.codewars.com/kata/5a54e01d80eba8014c000344
export const text_q1_7 = 'There are a series of 10 bombs about to go off! Defuse them all! Simple, right? \n Note: This is not an ordinary Kata, but more of a series of puzzles. The point is to figure out what you are supposed to do, then how to do it. Instructions are intentionally left vague.'; // https://www.codewars.com/kata/54d558c72a5e542c0600060fц

//Q1 FuncStart
export const function_name_q1_1 = 'function multiply (a,b) { \n\ \n\ }';
export const function_name_q1_2 = 'class Primes { \n static * stream() { \n // replace this with your solution \n for(let p of [2,3,5,7,11,13,17,19,23,29]) { \n yield p; \n } \n } \n }';
export const function_name_q1_3 = 'function pathFinder(area){ \n return 42; \n }';
export const function_name_q1_4 = 'function solve(s, ops) { \n return 0; \n };';
export const function_name_q1_5 = 'function generateBFProgramAdvanced(target) { \n // Return a BF program that evaluates to the target output provided \n // Your algorithm must outperform my reference solution in terms of shortening the BF code \n}';
export const function_name_q1_6 = 'function primeAnt(n) { \n return []; \n }';
export const function_name_q1_7 = '// Defuse all of the Bombs! \n Bomb.diffuse( /* your guess goes here */ ); \n // console.log( Bomb );';


//Q1 Examples
export const text_example_q1_1 = 'For example: \n smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0] \n smaller([1, 2, 0]) === [1, 1, 0] \n Note \n Your solution will be tested against inputs with up to 100_000 elements';
export const second_example_q1_1 = '';
export const text_example_q1_2 = '';
export const second_example_q1_2 = '';
export const text_example_q1_3 = '';
export const second_example_q1_3 = '';
export const text_example_q1_4 = 'For example, solve("tft","^&") = 2, as follows: \n "((t ^ f) & t)" = True \n "(t ^ (f & t))" = True \n Notice that the order of the boolean values and operators does not change. What changes is the position of braces. \n More examples in the test cases. \n Good luck!';
export const second_example_q1_4 = '';
export const text_example_q1_5 = 'In this Kata, your solution must always return a shorter BF program in terms of character count compared to that returned by the reference solution for all input strings of length >= 20.';
export const second_example_q1_5 = '';
export const text_example_q1_6 = '';
export const second_example_q1_6 = '';
export const text_example_q1_7 = '';
export const second_example_q1_7 = '';

//Q6 Tests
export const test_q1_1 = `const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;


describe('Initial Tests', () => {
  it('Sample tests', function(){
    assert.deepEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
    assert.deepEqual(smaller([1, 2, 3]), [0, 0, 0]);
    assert.deepEqual(smaller([1, 2, 0]), [1, 1, 0]);
    assert.deepEqual(smaller([1, 2, 1]), [0, 1, 0]);
    assert.deepEqual(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
    assert.deepEqual(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
    assert.deepEqual(smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]), [5, 2, 6, 6, 1, 1, 0, 0, 0, 0]);
  });
});`;

export const test_q1_2 = `function verify (from_n, ...vals) {
    const stream = Primes.stream()
    for(let i=0; i<from_n; ++i) stream.next()
    for(let v of vals) Test.assertEquals(stream.next().value, v)
  }
  
  describe('Small numbers', ()=>{
    it('0_10', ()=> verify(0,2,3,5,7,11,13,17,19,23,29))
    it('10_10', ()=> verify(10,31,37,41,43,47,53,59,61,67,71))
    it('100_10', ()=> verify(100,547,557,563,569,571,577,587,593,599,601))
    it('1000_10', ()=> verify(1000,7927,7933,7937,7949,7951,7963,7993,8009,8011,8017))
  })`;

export const test_q1_3 = `const { assert } = require("chai");

function testArea(expected, area){
  let actual = pathFinder(area);
  assert.strictEqual(actual, expected, area);
}

describe("Basic tests", () => {
  it("Flat lands", () => 
     testArea(0,
'000
000
000));

  it("Wall", () => 
    testArea(2,
'010
010
010'));

  it("Checkerboard", () =>
    testArea(4,
'010
101
010'));
  
  it("Checkerboard 2", () =>
    testArea(42,
'0707
7070
0707
7070'));

  it("Massif Central", () => 
    testArea(14,
'700000
077770
077770
077770
077770
000007'));

  it("Crest path", () =>
    testArea(0,
'777000
007000
007000
007000
007000
007777'));

  it("Minor obstacles", () =>
    testArea(4,
'000000
000000
000000
000010
000109
001010'));
});
`;

export const test_q1_4 = `describe("Basic tests", function(){
    Test.assertEquals(solve("tft","^&"),2);
    Test.assertEquals(solve("ttftff","|&^&&"),16);
    Test.assertEquals(solve("ttftfftf","|&^&&||"),339);
    Test.assertEquals(solve("ttftfftft","|&^&&||^"),851);
    Test.assertEquals(solve("ttftfftftf","|&^&&||^&"),2434);
    });`;


export const test_q1_5 = '';
export const test_q1_6 = '';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// UniqCase Tasks

export const text_uniq_1 = 'Create an endless stream that yields prime numbers. The stream must be able to produce a million primes in a few seconds. \n If this is too easy, try Prime Streaming (NC-17).'; // https://www.codewars.com/kata/5519a584a73e70fa570005f5; q1_2task
export const text_uniq_2 = 'Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). \n Examples \n n = 0  ==> [1]        # [2^0] \n n = 1  ==> [1, 2]     # [2^0, 2^1] \n n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]'; // https://www.codewars.com/kata/57a083a57cb1f31db7000028; q6_task2
export const text_uniq_3 = 'This code does not execute properly. Try to figure out why.'; // https://www.codewars.com/kata/50654ddff44f800200000004; q6_3
export const text_uniq_4 = 'Given a non-negative integer, return an array / a list of the individual digits in order. \n Examples: \n 123 => [1,2,3] \n 1 => [1] \n 8675309 => [8,6,7,5,3,0,9]'; // https://www.codewars.com/kata/5417423f9e2e6c2f040002ae; q5_6task
export const text_uniq_5 = 'Task \n You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions. \n Examples \n [7, 1]  =>  [1, 7] \n [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4] \n [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]'; // https://www.codewars.com/kata/578aa45ee9fd15ff4600090d; q4_3task
export const text_uniq_6 = 'A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). \n Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.'; // https://www.codewars.com/kata/545cedaa9943f7fe7b000048; q4_6task
export const text_uniq_7 = 'Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers. \n For example: \n ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8] \n ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26] \n ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]'; // https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c; q5_5task

//UniqCase Tests
export const test_uniq_1 = '';
export const test_uniq_2 = '';
export const test_uniq_3 = '';
export const test_uniq_4 = '';
export const test_uniq_5 = '';
export const test_uniq_6 = '';
