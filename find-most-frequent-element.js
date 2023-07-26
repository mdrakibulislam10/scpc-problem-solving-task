/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. */

function findMostFrequent(arr) {
    const countElement = {};
    let mostFrequentElement;
    let highestFrequency = 0;

    for (element of arr) {
        countElement[element] = (countElement[element] || 0) + 1;

        if (countElement[element] > highestFrequency) {
            highestFrequency = countElement[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

console.log(findMostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));