class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     * 
     * 
     * 8 hours
     * h = 9;
     * 
     * [3,6,7,11] h =8;
     * 
     * [1,2,3,4,5,6,7,8,9,10,11]
     * 
     * 
     * 
     */
    minEatingSpeed(piles, h) {

        let minRate = Math.max(...piles);
        // 4
        let left = 1;
        let right = minRate;

        while(left <= right) {
            // asume 3
            const mid = Math.trunc(right + left) /2;
            
            let hours = 0;
            // 1, 
            console.log({mid})
            for(let i = 0; i<piles.length; i++) {
                hours += Math.ceil(piles[i]/mid);
            }
            console.log(hours)

            if(hours > h) {
                left = mid + 1;
            } else {
                right = mid - 1;
                minRate = Math.min(mid, minRate);
            }
        }
        return minRate;

    }
}
