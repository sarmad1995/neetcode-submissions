class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {

        
        
        let reverse = 0;
        let num = x;
        if(x < 0) {
            return false;
        }
        while(num > 0) {
            const last = num % 10;
            console.log(last)
            reverse = (reverse * 10) + last;
            console.log(reverse)
            num = Math.floor(num / 10);
        }
        console.log(reverse, x)
        if(reverse === x) {
            return true;
        } 
        return false;
       
    }
}
