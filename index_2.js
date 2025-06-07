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