// function toCelsius (temperature) {
//     return (temperature -32) * .5556
    
//     }
    
//     function toFahrenheit (temperature) {
//     return (temperature *1.8) + 32
//     }
    
//     // Get a reference to the button element in the DOM
//     var button = document.getElementById("converter");
    
//     // This function should determine which conversion should
//     // happen based on which radio button is selected.
//     function determineConverter (clickEvent) {
//       console.log("event", clickEvent);
//     }
    
//     // Assign a function to be executed when the button is clicked
//     button.addEventListener("click", determineConverter);

let input=document.getElementById("input");
let convertButton = document.getElementById("converter");
let clearButton = document.getElementById("clear");
let toF = document.getElementById("fahrenheit");
let toC = document.getElementById("celsius");

convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearValue)

function printToDom (value) {
  document.getElementById("output").innerHTML = value;
}

function determineConverter () {
  let temperature = document.getElementById("number").value
  let convertedTemp = null;
  if (toF.checked) {
      convertedTemp = toFahrenheit(temperature);
  } else {
      convertedTemp = toCelsius(temperature);
  }
  printToDom(convertedTemp);
};

function clearValue() {
  document.getElementById("number").value = "";
  // clearButton = "";
  document.getElementById("output").innerHTML = "";
  toF.checked = false;
  toC.checked = false;
}

function toFahrenheit (temperature) {
  let fahrenheitValue = (temperature * 1.8) + 32 
    if (fahrenheitValue> 90) {
      output.style.color = "red";
    } else if (fahrenheitValue < 32) {
      output.style.color = "blue";
    } else {
      output.style.color = "black";
  }
  return fahrenheitValue;
}

function toCelsius (temperature) {
  let celciusValue= (temperature - 32) * .5556
  if (celciusValue> 32) {
    output.style.color = "red";
  } else if (celciusValue < 0) {
    output.style.color = "blue";
  } else {
    output.style.color = "black";
  }
  return celciusValue;
}
