class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {

        
        let reverse = 1;
        if(x < 0) {
            return false;
        }
        while(x > 0) {
            const last = x % 10;
            x = x /10;
            reverse *= (last * 10)
        }
        console.log(reverse);
        return true;
    }
}
