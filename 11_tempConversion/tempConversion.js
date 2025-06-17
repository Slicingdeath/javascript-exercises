const convertToCelsius = function(temperature) {
  temperature -= 32;
  temperature /= 9;
  temperature *= 5;
  return Math.round(temperature * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  temperature *= 9;
  temperature /=5;
  temperature += 32;
  return Math.round(temperature * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
