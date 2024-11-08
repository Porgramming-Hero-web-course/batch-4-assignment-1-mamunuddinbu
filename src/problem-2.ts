{
    function removeDuplicates(numbers: number[]): number[] {
        return numbers.filter((value, index) => numbers.indexOf(value) === index);
    }
    
    // Sample Input
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
    
}