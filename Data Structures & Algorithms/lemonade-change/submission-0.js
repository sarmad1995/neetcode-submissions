class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        const count = [0, 0];

        for(let i = 0; i<bills.length; i ++) {
            const value = bills[i];

            if(value === 5) {
                count[0]++;
            } else if (value === 10) {
                count[1]++;
                if(count[0] > 0) {
                    count[0]--;
                } else {
                    return false;
                }
            } else {
                if(count[1] > 0 && count[0] > 0) {
                    count[1]--;
                    count[0]--;
                } else if (count[0] >= 3) {
                    count[0] = count[0] - 3;
                } else {
                    return false;
                }
            }  
        }
        return true;
    }
}
