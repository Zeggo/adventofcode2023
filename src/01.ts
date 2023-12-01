export { }
// Part 1

const test = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

const test2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

const data = await fetch('../src/01-data.txt').then(res => {
    return res.text();
});

const lines = data.split('\n')

let sum: number = 0;

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
console.log(sum);

// find digits, find first and last digit of line and put them together (as string)
// get sum of numbers

// console.log(data, lines);
// console.log('Hello world');
