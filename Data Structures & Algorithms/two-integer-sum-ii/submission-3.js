class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 0;
        let right = numbers.length -1;

        while(left < right) {
            const leftValue = numbers[left];
            const rightValue = numbers[right];

            const sum = leftValue + rightValue;
            if(sum === target) {
                return [left + 1, right + 1]
            } else if(sum > target) {
                right --;
            } else {
                left ++;
            }
        }
        return []
    }
}
