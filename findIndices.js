/* Task 4: Create a function that takes a sorted array of numbers and a target value as input.The function should find two numbers in the array that add up to the target value.Return an array containing the indices of the two numbers. */

function findIndices(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    for (number of numbers) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left, right];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return [];
};

console.log(findIndices([1, 3, 6, 8, 11, 15], 9));