//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from 
// Celsius to Fahrenheit (or viceversa)


const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in 
// the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work


// F conversion to C
const day1InF = day1TempF;
const day2InF = (day2TempC * 9 / 5) + 32;
const day3InF = day3TempF;
const day4InF = (day4TempC * 9 / 5) + 32;
const day5InF = day5TempF;
const day6InF = (day6TempC * 9 / 5) + 32;
const day7InF = day7TempF;
const day8InF = (day8TempC * 9 / 5) + 32;
const day9InF = day9TempF;
const day10InF = (day10TempC * 9 / 5) + 32;
const day11InF = day11TempF;
const day12InF = (day12TempC * 9 / 5) + 32;
const day13InF = day13TempF;
const day14InF = (day14TempC * 9 / 5) + 32;
const day15InF = day15TempF;
const day16InF = (day16TempC * 9 / 5) + 32;
const day17InF = day17TempF;
const day18InF = (day18TempC * 9 / 5) + 32;
const day19InF = day19TempF;
const day20InF = (day20TempC * 9 / 5) + 32;
const day21InF = day21TempF;
const day22InF = (day22TempC * 9 / 5) + 32;
const day23InF = day23TempF;
const day24InF = (day24TempC * 9 / 5) + 32;
const day25InF = day25TempF;
const day26InF = (day26TempC * 9 / 5) + 32;
const day27InF = day27TempF;
const day28InF = (day28TempC * 9 / 5) + 32;
const day29InF = day29TempF;
const day30InF = (day30TempC * 9 / 5) + 32;

// Celsius conversion TO f
const day1InC = (day1TempF - 32) * 5 / 9;
const day2InC = day2TempC;
const day3InC = (day3TempF - 32) * 5 / 9;
const day4InC = day4TempC;
const day5InC = (day5TempF - 32) * 5 / 9;
const day6InC = day6TempC;
const day7InC = (day7TempF - 32) * 5 / 9;
const day8InC = day8TempC;
const day9InC = (day9TempF - 32) * 5 / 9;
const day10InC = day10TempC;
const day11InC = (day11TempF - 32) * 5 / 9;
const day12InC = day12TempC;
const day13InC = (day13TempF - 32) * 5 / 9;
const day14InC = day14TempC;
const day15InC = (day15TempF - 32) * 5 / 9;
const day16InC = day16TempC;
const day17InC = (day17TempF - 32) * 5 / 9;
const day18InC = day18TempC;
const day19InC = (day19TempF - 32) * 5 / 9;
const day20InC = day20TempC;
const day21InC = (day21TempF - 32) * 5 / 9;
const day22InC = day22TempC;
const day23InC = (day23TempF - 32) * 5 / 9;
const day24InC = day24TempC;
const day25InC = (day25TempF - 32) * 5 / 9;
const day26InC = day26TempC;
const day27InC = (day27TempF - 32) * 5 / 9;
const day28InC = day28TempC;
const day29InC = (day29TempF - 32) * 5 / 9;
const day30InC = day30TempC;


const tot_temperature_in_fahrenheit = 
  day1InF + day2InF + day3InF + day4InF + day5InF + 
  day6InF + day7InF + day8InF + day9InF + day10InF + 
  day11InF + day12InF + day13InF + day14InF + day15InF + 
  day16InF + day17InF + day18InF + day19InF + day20InF + 
  day21InF + day22InF + day23InF + day24InF + day25InF + 
  day26InF + day27InF + day28InF + day29InF + day30InF;

const tot_temperature_in_celsius = 
  day1InC + day2InC + day3InC + day4InC + day5InC + 
  day6InC + day7InC + day8InC + day9InC + day10InC + 
  day11InC + day12InC + day13InC + day14InC + day15InC + 
  day16InC + day17InC + day18InC + day19InC + day20InC + 
  day21InC + day22InC + day23InC + day24InC + day25InC + 
  day26InC + day27InC + day28InC + day29InC + day30InC;


const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;


console.log(avg_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit);

console.log(tot_temperature_in_celsius);
console.log(tot_temperature_in_fahrenheit);



module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
