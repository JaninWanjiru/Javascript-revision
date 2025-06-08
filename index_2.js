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


// Challenge 4 Group by Type
function groupByType(arr) {
    let result= {};
    for (let i=0; i<arr.length; i++) {
        if (!result[typeof arr[i]]) {
            result[typeof arr[i]] = [];
        }
        result[typeof arr[i]].push(arr[i]);
    }
    return result;
}
console.log(groupByType([1, "a", true, 2, "b", false]));

// Challenge 5 Remove Falsy Values
function removeFalsy(arr) {
    let result = [];
    for (let i=0; i< arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeFalsy([0, "hello", false, 42, "", null]));

