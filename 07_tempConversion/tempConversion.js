const log = console.log;

const convertToCelsius = function (fahrenheit) {
  const celsiusConversion = (fahrenheit - 32) * (5 / 9);
  if (celsiusConversion != Math.trunc(celsiusConversion)) {
    const celsiusTemp = parseFloat(celsiusConversion.toFixed(1));
    return celsiusTemp;
  } else {
    return celsiusConversion;
  }
};

const convertToFahrenheit = function (celsius) {
  const fahrenheitConversion = celsius * (9 / 5) + 32;
  if (fahrenheitConversion != Math.trunc(fahrenheitConversion)) {
    const farhenheitTemp = parseFloat(fahrenheitConversion.toFixed(1));
    return farhenheitTemp;
  } else {
    return fahrenheitConversion;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
