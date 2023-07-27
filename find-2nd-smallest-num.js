/* Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */

function secondSmallest(numbers) {
    let smallest = numbers[0];
    let secondSmallest;

    for (number of numbers) {
        if (number < smallest) {
            secondSmallest = smallest;
            smallest = number;
        }
        else if (number < secondSmallest && number !== smallest) {
            secondSmallest = number;
        }
    }

    return secondSmallest;

};

console.log(secondSmallest([47, 34, 56, 43, 23, 100, 26, 224, 45, 90, 34]));