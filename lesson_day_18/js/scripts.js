console.log('Lesson Day 18 - JS Arrays');


var ball1 = 'basketball';
var ball2 = 'football';
var ball3 = 'tennisball';




var ballContainer = ['basketball', 'football','tennisball'];
var myfavNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var booleanArray = [true, false, true, false];

console.log(ballContainer);

console.log(ballContainer[0]);
console.log(ballContainer[1]);
console.log(ballContainer[2]);
console.log(ballContainer[3]);

console.log(myfavNumbers.length);

for(var i=0; i<myfavNumbers.length; i++) {
    console.log('my favorite number is: '+myfavNumbers[i]);
}
console.log('my favorite numbers before :'+myfavNumbers);
myfavNumbers[6]=14;
myfavNumbers[7]=16;
myfavNumbers[8]=18;
console.log('my favorite numbers after:'+ myfavNumbers);