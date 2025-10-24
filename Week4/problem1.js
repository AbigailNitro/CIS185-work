//problem 1: temp conversion
//Abigail Hitchcock
//10/23/25

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9; 
}


function getTempDesc(fahrenheit) {
    
    //declare something to return
    let desc = "Hot";
    
        if (fahrenheit < 32) {
            desc = "Freezing";
        }
        else if (fahrenheit < 51) {
            desc = "Cold";
        }
        else if (fahrenheit < 71) {
            desc = "Cool";
        }
        else if (fahrenheit < 85) {
            desc = "Warm";
        }
        else {
            //since all other temps are accounted before, anything above 85 uses the default "Hot"
        }
    
    return desc;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(-40));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(68));
console.log(fahrenheitToCelsius(212));
console.log(getTempDesc(25));
console.log(getTempDesc(75));
console.log(getTempDesc(95));