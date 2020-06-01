///////////////////// BOM - PRACTICE //////////////////////

////// Global JavaScript Objects ///////

///// Math /////

/* 
Random:
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
*/

function randomNum() {
    var randomNumArray = [];

    for (var i = 0; i < 10; i++) {
        var generateRandomNum = 50 * Math.random();
        randomNumArray[i] = generateRandomNum;
    }
    return randomNumArray;
}

var createRandomNum = randomNum();
console.log('Generate random numbers in array:');
console.log(createRandomNum);


/* 
Round:
Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
*/

function roundNum(createRandomNum) {
    var roundNumArray = [];

    for (var i = 0; i < 10; i++) {
        var generateRoundNum = Math.round(createRandomNum[i]);
        roundNumArray[i] = generateRoundNum;
    }
    return roundNumArray;
}

var createRoundNum = roundNum(createRandomNum);
console.log('Round numbers in array:');
console.log(createRoundNum);


/* 
Floor:
Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
*/

function floorNum(createRandomNum) {
    var floorNumArray = [];

    for (var i = 0; i < 10; i++) {
        var generateFloorNum = Math.floor(createRandomNum[i]);
        floorNumArray[i] = generateFloorNum;
    }
    return floorNumArray;
}

var createFloorNum = floorNum(createRandomNum);
console.log('Floor numbers in array:');
console.log(createFloorNum);


/* Max
Create a function that finds and prints out the biggest number.
*/

function maxNum() {
    return Math.max(1, 2, 3, 5, 100, 23232, 123, 53443);
}
console.log(maxNum());