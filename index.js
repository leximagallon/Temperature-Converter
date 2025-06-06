const convertToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
};

const describeTemperature = (fahrenheit) => {
  const celsius = convertToCelsius(fahrenheit);
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
};
console.log(describeTemperature(45));

let temperature = prompt ("** please enter temperature in fahrenheit **");
let fahrenheit = Number(temperature);
let celsius = convertToCelsius(fahrenheit);
let description = describeTemperature(fahrenheit);

let code = fahrenheit + " fahrenheit is about " + celsius + " celsius, it's " + description + "!" ;
alert(code);
