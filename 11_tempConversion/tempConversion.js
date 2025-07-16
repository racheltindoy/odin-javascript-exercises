const convertToCelsius = function(temp) {
  let celsiusUnrounded  = (temp - 32) * 5/9;
  let celsiusRounded = Math.round(celsiusUnrounded * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(temp) {
  let fahrenheightUnrounded = (temp * 9/5) + 32;
  let fahrenheightRounded = Math.round(fahrenheightUnrounded * 10) / 10;

  return fahrenheightRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
