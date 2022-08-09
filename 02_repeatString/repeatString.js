
 const repeatString = function(str, times) {
    
    let i;
    for(i = 0; i < numberOfTimes - 1; i++) {
        repeatedString += str;
    }

    return repeatedString;
};

let repeatedString = 'hey';
let numberOfTimes = 3;

console.log(repeatString(repeatedString, numberOfTimes));


// Do not edit below this line
module.exports = repeatString;
