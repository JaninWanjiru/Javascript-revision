// Challenge 1 Min of negatives
function minOfNegatives(arr) {
    let smallNegNo = null;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            if (smallNegNo === null || arr[i] < smallNegNo) {
                smallNegNo = arr[i]
            }
            
        }
    }
    return smallNegNo;
}
console.log(minOfNegatives([3, -2, -8, 4, -5]));
console.log(minOfNegatives([1, 3, 5]));


// Challenge 2 Object to array
function objectToArray(obj) {
    let result = [];
    let keys = Object.keys(obj);

    for (let i=0; i<keys.length; i++) {
        let key = keys[i];    //key = "name" then "age"
        let value =obj[key];  //value= "Alice" then 25
        result.push(value);   //returns only the value (not key-value pairs)
    }
    return result;
}
console.log(objectToArray({name: "Alice", age: 25}))


// Challenge 3 Capitalize words
function capitalizeWords(arr) {
    let wordsCapitalized = [];
    for (let i=0; i<arr.length; i++) {
        let capitalized = arr[i].toUpperCase() 
        wordsCapitalized.push(capitalized);
    }
    return wordsCapitalized;
}
console.log(capitalizeWords(["well", "done"]));

// Challenge 4 Find duplicates


// Challenge 5 Group by Type


// Challenge 6 Merge arrays Uniquely


// Challenge 7 Object Key formatter


// Challenge 8 Remove falsy values


// Challenge 9 Second largest


// Challenge 10 Sum nested arrays