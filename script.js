alert("Hi Customer! We are looking forward for your business and you will soon be directed to the trading platform. First we'll need some info about you.");
let customerName= prompt ("Your Name please?");
let customerAge= prompt ("Your age please?");
let invalidInput;
invalidInput = isNaN (customerAge);
if (invalidInput){alert ('Please enter a numeric input!'); throw "INVALID"};
if (customerAge <18) {alert (customerName + ", You must be at least 18 years old to trade! You are only " + customerAge + " years old now."); throw "UNDERAGE"};