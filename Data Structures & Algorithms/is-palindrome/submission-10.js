class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let left = 0;
        let right = 0;

        while(left < right) {
            const l = s[left];
            const r = s[right];

            if(!isValid(l)) {
                left ++;
                continue;
            } else if(!isValid(r)) {
                right --;
                continue;
            }
            if(l.toLowerCase() !== r.toLowerCase()) {
                return false;
            }
            left ++;
            right --;
        }
        return true;
    }


    isValid(char) {
        return (char >= 'a' && char <= 'z') ||
               (char >= 'A' && char <= 'Z') ||
               (char >= '0' && char <= '9')
    }
}
