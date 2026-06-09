class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {

        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle[0]) {
                let left = 0;
                let j = i;
                while (left < needle.length) {
                    if (haystack[j] !== needle[left]) {
                        break;
                    }
                    j++;
                    left++;
                }
                if (left === needle.length) {
                    return i;
                }
            }
        }
        return -1;
    }
}
