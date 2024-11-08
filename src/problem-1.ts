{
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Sample Input
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
}