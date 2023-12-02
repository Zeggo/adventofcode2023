// Day 2: Cube Conundrum
import { fetchData } from "./helper.js";

const data = await fetchData('02');

// Part 1: 

const test = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
// const data = test;

const lines = data.split('\n')

const possibleGameIds = [];

for (const line of lines) {
  const game = line.split(/[:;,]/);
  const id = lines.indexOf(line) + 1;
  // console.log(id);

  let possible = true;

  for (let i = 1; i < game.length; i++) {
    const cubes = game[i].trim().split(' ');
    // console.log(cubes);

    switch (cubes[1]) {
      case 'red':
        if (Number(cubes[0]) > 12) {
          // possibleGameIds.push(id);
          possible = false;
        }
        break;
      case 'green':
        if (Number(cubes[0]) > 13) {
          // possibleGameIds.push(id);
          possible = false;
        }
        break;
      case 'blue':
        if (Number(cubes[0]) > 14) {
          possible = false;
        }
        break;
    }
    if (possible === false) break;
  }
  if (possible === true) possibleGameIds.push(id);
}
// console.log(possibleGameIds);
const sumId = possibleGameIds.reduce((sum, cur) => sum + cur)
console.log('Day 2, Part 1: ' + sumId);


// Part 2:
// Smallest number of cubes of each color in each game
// Power of minimum set of cubes -> numbers of cubes multiplied together
// Answer: Sum of the power of the sets

const powersOfSets = [];

for (const line of lines) {
  const game = line.split(/[:;,]/);

  let minR = 1;
  let minG = 1;
  let minB = 1;

  for (let i = 1; i < game.length; i++) {
    const cubes = game[i].trim().split(' ');
    // console.log(cubes);

    const numCubes = Number(cubes[0]);

    switch (cubes[1]) {
      case 'red':
        if (numCubes > minR) {
          minR = numCubes;
        }
        break;
      case 'green':
        if (numCubes > minG) {
          minG = numCubes;
        }
        break;
      case 'blue':
        if (numCubes > minB) {
          minB = numCubes;
        }
        break;
    }
  }
  // console.log(minR, minG, minB);

  const power = minR * minG * minB;
  // console.log(power);

  powersOfSets.push(power)
}
const sumPower = powersOfSets.reduce((sum, cur) => sum + cur)
console.log('Day 2, Part 2: ' + sumPower);