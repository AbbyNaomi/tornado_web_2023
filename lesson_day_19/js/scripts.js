console.log('Lesson Day 19 - DOM Create');


var stringArray = ['one', 'two', 'three', 'four', 'five'];
console.log(stringArray);

console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);
console.log(stringArray[4]);

for(let index = 0; index < numberArray.length; index++){
    console.log(numberArray[index]);
}

numberArray[3]=14;
console.log(numberArray);

var maxElement = -1000;
for (let i=0; i<numberArray.length; i++){
    if (numberArray[i] >= maxElement){
        maxElement=numberArray[i];
    }
}

console.log('max element:', maxElement);
