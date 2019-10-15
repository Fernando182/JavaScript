function getSecondLargest(nums) {
    // Complete the function
    // get the largest number
    const max = Math.max(...nums);
    
    // filter out largest number 
    nums = nums.filter(i => i !== max);
    
    // return new largest number 
    return Math.max(...nums);
}
