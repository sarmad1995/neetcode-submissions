class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let left = 0;
        let right = s.length -1;
        while( left < right) {
            const leftValue = s[left]
            const rightValue = s[right]
            if(!this.isAlphanumeric(rightValue)) {
                right --;
                continue;
            } else if (!this.isAlphanumeric(leftValue)) {
                left ++;
                continue;
            } else if(s[left].toLowerCase() !== s[right].toLowerCase()) {
                console.log(s[left], s[right])
                return false;
            } 
            left ++;
            right --;
            
        }
        return true;
    }
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') || 
            (char >= '0' && char <= '9')
        )
       
    }
}
