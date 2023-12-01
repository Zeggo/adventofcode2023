// Part 1
const test = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
const data = await fetch('../src/01-data.txt').then(res => {
    return res.text();
});
const lines = data.split('\n');
let sum = 0;
for (const line of lines) {
    // console.log(line);
    const digits = [];
    for (const char of line) {
        if (Number.isInteger(Number(char))) {
            digits.push(char);
        }
    }
    const value = digits[0] + digits.at(-1);
    sum += Number(value);
}
console.log('Part 1: ' + sum);
// find digits, find first and last digit of line and put them together (as string)
// get sum of numbers
// console.log(data, lines);
// console.log('Hello world');
// Part 2
// parse spelled out numbers as digits
const test2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
const data2 = data;
const spelledDigits = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];
const lines2 = data2.split('\n');
let sum2 = 0;
for (const line of lines2) {
    const digits = [];
    // console.log(line);
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (Number.isInteger(Number(char))) {
            digits.push(char);
            // console.log('Number ' + char);
        }
        else {
            for (const spelledDigit of spelledDigits) {
                if (line.substring(i, i + spelledDigit.length).includes(spelledDigit)) {
                    digits.push(String(spelledDigits.indexOf(spelledDigit)));
                    // console.log('Found ' + spelledDigit);
                }
            }
        }
    }
    // console.log(digits);
    const value = digits[0] + digits.at(-1);
    sum2 += Number(value);
}
console.log("Part 2: " + sum2);
export {};
