let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 17;

if (runnerAge === 35 && registeredEarly === true) {
  raceNumber += 1000;
  }

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`The race is 9:30 a.m. and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`The race is 11:00 a.m. and your race number is ${raceNumber}.`);
} else {
  console.log(`The race is 12:30 p.m. and your race number is ${raceNumber}.`);
}